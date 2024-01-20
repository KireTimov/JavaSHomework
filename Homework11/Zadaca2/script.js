
document.addEventListener('DOMContentLoaded', function () {
    const reminders = [];
  
    let button1 = document.getElementById('button1');
    button1.onclick = function () {
      let title = document.getElementById('title').value;
      let priority = document.getElementById('priority').value;
      let color = document.getElementById('color').value;
      let textarea = document.getElementById('description').value; 
  
      const reminder = { title, priority, color, textarea };
      reminders.push(reminder);
    }
  

document.getElementById('button2').onclick = function showReminders (){
  const tableBody = document.getElementById('reminderTableBody');
  tableBody.innerHTML = '';

  for (let i = 0; i < reminders.length; i++) {
    const reminder = reminders[i];
    const row = tableBody.insertRow();

    for (let j = 0; j < 3; j++) {
      const cell = row.insertCell(j);

      switch (j) {
        case 0:
          cell.innerHTML = `${reminder.title}`;
          cell.style.backgroundColor = reminder.color;
          break;
        case 1:
          cell.innerHTML = `${reminder.priority}`;
          break;
        case 2:
          cell.innerHTML = `${reminder.textarea}`;
          break;
      }
    }
  }
}
});
