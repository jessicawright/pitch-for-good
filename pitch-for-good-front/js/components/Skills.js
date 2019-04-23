export default function Skills(skills) {
    return `
    <ul id="skill">
            ${skills.map(skill => {
        return `
            <li class="skill">
                <h4 class="skillName">${skill.skillName}</h4>
            </li>
        `;
    }).join('')}
        </ul>

    `;
}