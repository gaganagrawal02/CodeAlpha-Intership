// Simulated issue tracking
let issues = [];

// Function to create an issue
function createIssue() {
    const issueTitle = document.getElementById('issueTitle').value;
    const issueDescription = document.getElementById('issueDescription').value;
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.options[prioritySelect.selectedIndex].value;
    const fileInput = document.getElementById('fileInput').files;

    const issue = {
        title: issueTitle,
        description: issueDescription,
        priority: priority,
        attachments: fileInput,
    };

    issues.push(issue);

    displayIssues();
}

// Function to display issues
function displayIssues() {
    const issuesList = document.getElementById('issues');
    issuesList.innerHTML = '';

    issues.forEach((issue, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Title:</strong> ${issue.title}<br>
            <strong>Description:</strong> ${issue.description}<br>
            <strong>Priority:</strong> ${issue.priority}<br>
            <strong>Attachments:</strong> ${issue.attachments.length} files<br>
        `;
        issuesList.appendChild(listItem);
    });
}
