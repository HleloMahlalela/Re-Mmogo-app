import "../styles/enroll.css";

function Enroll() {
    return (
        <div className="enroll-page">
            <div className="enroll-header">
                <h1>Member Enrollment</h1>
                <p>Add and manage members in the Motshelo group.</p>
            </div>

            <div className="enroll-card">
                <h2>Enroll New Member</h2>

                <form className="enroll-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number" />

                    <select>
                        <option>Regular Member</option>
                        <option>Signatory</option>
                    </select>

                    <button type="submit">Enroll Member</button>
                </form>
            </div>

            <div className="members-list">
                <h2>Current Members</h2>

                <div className="member-item">
                    <span>Amantle Carol</span>
                    <span className="member-role">Signatory</span>
                </div>

                <div className="member-item">
                    <span>Kabelo M.</span>
                    <span className="member-role">Member</span>
                </div>

                <div className="member-item">
                    <span>Neo T.</span>
                    <span className="member-role">Member</span>
                </div>
            </div>
        </div>
    );
}

export default Enroll;