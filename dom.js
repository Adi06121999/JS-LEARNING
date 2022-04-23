 document.getElementById('submit_details').addEventListener('click', () => {
     const user_name = document.getElementById('user_name').value;
     console.dir(user_name)
     const contact_number = document.getElementById('contact_number').value;
     const issue_desc = document.getElementById('issue_desc').value;
     const severity_issue = document.getElementById('severity_issue').selectedOptions[0].innerText;

     document.getElementById('table_body').innerHTML += `<tr>
                <td>${user_name}</td>
                <td>${contact_number}</td>
                <td>${issue_desc}</td>
                <td>${severity_issue}</td>
              </tr>`

     document.getElementById('user_name').value = '';
     document.getElementById('contact_number').value = '';
     document.getElementById('issue_desc').value = '';

 })