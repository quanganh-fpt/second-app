export default function Pets() {
  return (
    <div className="card-group">
      <div className="card">
        <img
          className="card-img-top"
          src="https://th.bing.com/th/id/OIP.Tnf3v2w4Do3gSnCA2QmUvQHaEo?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title 1</h5>
          <p className="card-text">
            {" "}
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-nuted"> Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-ing-top"
          src="https://th.bing.com/th/id/OIP.GV4n3VaxupBuQnSn59Ly2gHaEJ?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"> Card title 2</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            {" "}
            <small className="text-muted"> Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://th.bing.com/th/id/OIP.I_4lgUG4P1KiP-mnqVLawgHaEo?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title"> Card title 3 </h5>
          <p className="card-text">
            {" "}
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the{" "}
          </p>
          <p className="card-text">
            {" "}
            <small className="text-muted"> Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
