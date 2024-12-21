async function fetchData() {
	const data = await fetch("project.json");
	const json = await data.json();
	return json.projects;
}

(async () => {
	const projects = await fetchData(); // Assume fetchData is a function that fetches project data
	const projectContainer = document.querySelector(".projects-list");
	const projectFragment = document.createDocumentFragment();

	projects.forEach((project) => {
		const container = document.createElement("div");
		container.className = "project";
		container.innerHTML = `
            <div class="project-info">
                ${project?.project_name ? `<h2>${project.project_name}</h2>` : ""}
                ${project?.client ? `<p class="project-client"><strong>Client:</strong> ${project.client}</p>` : ""}
                ${project?.address ? `<p class="project-address"><strong>Address:</strong> ${project.address}</p>` : ""}
                ${project?.contact ? `<p class="project-contact"><strong>Contact:</strong> ${project.contact}</p>` : ""}
                ${project?.location ? `<p class="project-location"><strong>Location:</strong> ${project.location}</p>` : ""}
            </div>
           <div class="project-rental">
                ${project?.rentals?.length ? `<p><strong>Rentals:</strong></p><ul>${project.rentals.map((rental) => `<li>${rental}</li>`).join("")}</ul>` : ""}
            </div>
        `;
		projectFragment.appendChild(container);
	});

	projectContainer.appendChild(projectFragment);
})();
