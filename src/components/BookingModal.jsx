function BookingModal({ show, onClose, courtName }) {

  if (!show) return null

  const today = new Date().toLocaleDateString()

  return (

    <div className="modal fade show d-block">

      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title text-success">
              Booking Confirmed
            </h5>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>

          </div>

          <div className="modal-body">

            <p>
              ✅ <strong>{courtName}</strong> booked successfully!
            </p>

            <p>
              📅 Date: {today}
            </p>

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-success"
              onClick={onClose}
            >
              OK
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default BookingModal