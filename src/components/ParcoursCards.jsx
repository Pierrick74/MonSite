
export function ParcoursCard({ parcours }) {
    return (
        <div class="timeline-content">
            <p class="timeline-date">{parcours.date}</p>
            <h3 class="timeline-title timeline-animate">{parcours.metier}</h3>
            <p class="timeline-subtitle timeline-animate">{parcours.entreprise}</p>
            <p class="timeline-description timeline-animate">{parcours.description}</p>
            <div class="mt-2 flex flex-wrap gap-2">
                {parcours.skills.map((skill, index) => (
                    <span key={index} class="parcours-badge">{skill}</span>
                ))}
            </div>
        </div>
    )
}
