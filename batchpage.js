document.addEventListener('DOMContentLoaded', () => {
    const currentTime = new Date();
  
    const batchTimes = [
        { id: 'batch1', start: '12:15', end: '13:10' },
        { id: 'batch2', start: '13:10', end: '13:30' },
        { id: 'batch3', start: '13:30', end: '13:50' }
    ];
  
    batchTimes.forEach(batch => {
        const batchBtn = document.getElementById(batch.id);
        const [startHour, startMinute] = batch.start.split(':');
        const [endHour, endMinute] = batch.end.split(':');
  
        const batchStartTime = new Date();
        batchStartTime.setHours(startHour);
        batchStartTime.setMinutes(startMinute);
        batchStartTime.setSeconds(0);
        batchStartTime.setMilliseconds(0);
  
        const batchEndTime = new Date();
        batchEndTime.setHours(endHour);
        batchEndTime.setMinutes(endMinute);
        batchEndTime.setSeconds(0);
        batchEndTime.setMilliseconds(0);
  
        //Remove this condition if you want the buttons to be always enabled
        if (currentTime < batchStartTime || currentTime >= batchEndTime) {
            batchBtn.disabled = true;
        } else {
            batchBtn.addEventListener('click', () => {
                localStorage.setItem('selectedBatch', batch.start + ' - ' + batch.end);
                window.location.href = 'menu.html';
            });
        }
    });
  });