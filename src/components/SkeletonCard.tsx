export function SkeletonCard() {
  return (
    <div className="card w-100" aria-hidden="true">
      <div className="d-flex flex-row p-3 gap-2">
        <div className="d-flex flex-column gap-3 w-50">
          <span className="placeholder w-25 mb-3"></span>
          <span className="placeholder w-100"></span>
          <span className="placeholder w-50"></span>
          <span className="placeholder w-100"></span>
          <span className="placeholder w-50"></span>
          <span className="placeholder w-100"></span>
        </div>

        <div className=" d-flex flex-column w-50">
          <span className="placeholder w-100 h-100"></span>
        </div>
      </div>
      <span className="placeholder w-75 pt-5 m-auto mb-2"></span>
    </div>
  );
}
