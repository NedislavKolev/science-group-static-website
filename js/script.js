const members = [
    {
        name: "Member One",
        photo: "images/member1.jpg",
        bio: "Bio of Member One",
        expertise: ["Physics", "Mathematics"]
    },
    {
        name: "Member Two",
        photo: "images/member2.jpg",
        bio: "Bio of Member Two",
        expertise: ["Biology", "Chemistry"]
    },
    {
        name: "Member Three",
        photo: "images/member3.jpg",
        bio: "Bio of Member Three",
        expertise: ["Astrophysics", "Engineering"]
    },
    {
        name: "Member Four",
        photo: "images/member4.jpg",
        bio: "Bio of Member Four",
        expertise: ["Environmental Science"]
    },
    {
        name: "Member Five",
        photo: "images/member5.jpg",
        bio: "Bio of Member Five",
        expertise: ["Computer Science", "Data Science"]
    },
    {
        name: "Member Six",
        photo: "images/member6.jpg",
        bio: "Bio of Member Six",
        expertise: ["Chemistry", "Pharmacology"]
    },
    {
        name: "Member Seven",
        photo: "images/member7.jpg",
        bio: "Bio of Member Seven",
        expertise: ["Geology", "Mineralogy"]
    },
    {
        name: "Member Eight",
        photo: "images/member8.jpg",
        bio: "Bio of Member Eight",
        expertise: ["Psychology", "Cognitive Science"]
    },
    {
        name: "Member Nine",
        photo: "images/member9.jpg",
        bio: "Bio of Member Nine",
        expertise: ["Botany", "Ecology"]
    },
    {
        name: "Member Ten",
        photo: "images/member10.jpg",
        bio: "Bio of Member Ten",
        expertise: ["Sociology", "Anthropology"]
    }
];

const projects = [
    {
        title: "Project One",
        description: "Description of project one."
    },
    {
        title: "Project Two",
        description: "Description of project two."
    },
    {
        title: "Project Three",
        description: "Description of project three."
    }
];

const resources = [
    {
        title: "Article One",
        link: "articles/article1.pdf"
    },
    {
        title: "Article Two",
        link: "articles/article2.pdf"
    }
];

function loadMembers() {
    const memberList = document.getElementById('member-list');
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="${member.photo}" alt="Photo of ${member.name}" width="150">
            <h4>${member.name}</h4>
            <p>${member.bio}</p>
            <p><strong>Expertise:</strong> ${member.expertise.join(', ')}<\/p>
        `;
        memberList.appendChild(memberCard);
    });
}

function loadProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectCard);
    });
}

function loadResources() {
    const resourceList = document.getElementById('resource-list');
    resources.forEach(resource => {
        const resourceItem = document.createElement('li');
        resourceItem.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
        resourceList.appendChild(resourceItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById('member-list')) {
        loadMembers();
    }
    if (document.getElementById('project-list')) {
        loadProjects();
    }
    if (document.getElementById('resource-list')) {
        loadResources();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitMessage = document.getElementById('submit-message');
            submitMessage.innerHTML = "Thank you for your message! We'll get back to you soon.";
            contactForm.reset();
        });
    }
});
