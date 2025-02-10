document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    
    const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60);
    
    document.getElementById('result').innerText = `Total Seconds: ${totalSeconds}`;
});
