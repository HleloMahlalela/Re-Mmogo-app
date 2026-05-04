import "../styles/balances.css";

function Balances() {
  return (
    <div className="balances-page">
      {/* Page title section */}
      <div className="balances-header">
        <h1>Balances</h1>
        <p>View the current financial position of the Motshelo group.</p>
      </div>

      {/* Balance summary cards */}
      <div className="balance-cards">
        <div className="balance-card">
          <h3>Total Contributions</h3>
          <div className="amount">P12,000</div>
          <p>Money contributed by members so far.</p>
        </div>

        <div className="balance-card">
          <h3>Loan Pool</h3>
          <div className="amount">P8,500</div>
          <p>Amount currently available for borrowing.</p>
        </div>

        <div className="balance-card">
          <h3>Interest Earned</h3>
          <div className="amount">P2,400</div>
          <p>Total interest generated from loans.</p>
        </div>
      </div>
    </div>
  );
}

