<div class="members">
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Jeremiah Wheeler</h3>
            <p>CEO</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Joseph Wheeler - Mooresville Management</h3>
            <p>Master Technician / Repair Manager</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Josh Wheeler - Operations Manager</h3>
            <p>Operations Integrity / Systems Control</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Marcus Miller - Mooresville Management</h3>
            <p>Marketing & Social Media</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Jordan Buchanan - Boone Management</h3>
            <p>IT Specialist / Product QA / Customer Evangelist</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Zackery Beane - Mooresville Management</h3>
            <p>Security & Software Advisor</p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Brandon Hawks - Marketing Design & Media</h3>
            <p></p>
        </div>
    </div>
    <div class="member-container">
        <div class="green-container">
            <div class="team-member-logo"></div>
        </div>
        <div class="title">
            <h3>Joshua Gaither</h3>
            <p>Web Developer</p>
        </div>
    </div>
</div>

.members {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100vw;
    margin-bottom: 4rem;
}

.member-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
}

.green-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    max-height: 250px;
    max-width: 250px;
    border-radius: 50%;
    background-color: rgba(50, 134, 68, 0.6);
    border: 5px solid rgb(50, 134, 68);
    margin-right: 1rem;
}

.team-member-logo {
    background-image: url('../Images/webp/team-member-icon.webp');
    background-image: url('../Images/png/team-member-icon.png'), none;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    max-height: 150px;
    max-width: 150px;
}

.title {
    font-family: 'Figtree', sans-serif;
    color: white;
    margin: 0;
    padding: 0;
}

.title p {
    color: var(--color_27);
}

On my website I am trying to add all of the team members and the images look good and I have the text to the right of each image but from top to bottom the logos are not 