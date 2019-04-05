export default function Skills(skills) {
    return `
    <ul id="skill">
            ${skills.map(skill => {
        return `
            <li class="skill">
                <h3 class="skillName">${skill.skillName}</h3>
            </li>
        `;
    }).join('')}
        </ul>

    `;
}