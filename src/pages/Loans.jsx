import "../styles/loans.css";

function Loans() {
  return (
    <div className="loans-page">
      {/* Page heading section */}
      <div className="loans-header">
        <h1>Loans</h1>
        <p>Request loans and monitor approval progress.</p>
      </div>

      {/* Loan request form container */}
      <div className="loan-card">
        <h2>Request New Loan</h2>

        {/* Form used to collect loan request details */}
        <form className="loan-form">
          {/* Name of member requesting the loan */}
          <input
            type="text"
            placeholder="Member Name"
          />

          {/* Amount requested */}
          <input
            type="number"
            placeholder="Loan Amount"
          />

          {/* Reason for requesting loan */}
          <textarea
            placeholder="Reason for loan request"
          ></textarea>

          {/* Temporary dropdown for display/testing */}
          <select>
            <option>Pending Approval</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          {/* Submit button */}
          <button type="submit">
            Submit Loan Request
          </button>
        </form>
      </div>

      {/* Existing loan records */}
      <div className="loan-list">
        <h2>Loan Records</h2>

        {/* First sample loan */}
        <div className="loan-item">
          <p>
            <strong>Amantle Carol</strong> requested P2,000
          </p>

          <p>
            Status:{" "}
            <span className="status pending">
              Pending
            </span>
          </p>
        </div>

        {/* Second sample loan */}
        <div className="loan-item">
          <p>
            <strong>Kabelo M.</strong> borrowed P1,500
          </p>

          <p>
            Status:{" "}
            <span className="status approved">
              Approved
            </span>
          </p>
        </div>

        {/* Third sample loan */}
        <div className="loan-item">
          <p>
            <strong>Neo T.</strong> requested P3,000
          </p>

          <p>
            Status:{" "}
            <span className="status pending">
              Pending
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loans;