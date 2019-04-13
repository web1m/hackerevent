import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

export default () => {
  const data = [
    {
      date: '30/5/2019',
      eventName: 'metting',
      location: 'VN',
      tag: 'coding'
    }
  ]
  return (
    <>
      <nav
        class="navbar navbar-dark"
        style={{
          justifyContent: 'center',
          background: '#000'
        }}
      >
        <span class="navbar-brand mb-0 h1">
          Hacker
          <span
            style={{
              color: 'red'
            }}
          >
            Event
          </span>
        </span>
      </nav>

      <div
        class="jumbotron jumbotron-fluid"
        style={{
          background: '#000',
          color: 'white'
        }}
      >
        <div class="container">
          <h1 class="display-4">
            <strong>Sự kiện</strong>
          </h1>
          <p class="lead">
            Chúng tôi rất thích gặp bạn trong những sự kiện sắp tới.
          </p>
        </div>
      </div>

      <section className="container">
        <h1 className="mt-5 mb-4" style={{ fontWeight: 400 }}>
          Sắp diễn ra
        </h1>
        <hr />

        {data.map((event, i) => (
          <div key={i}>
            <div className="row pt-3 pb-2">
              <div
                className="col-3"
                style={{
                  fontWeight: 400,
                  color: 'rgba(0,0,0, 0.5)'
                }}
              >
                <h3>Tháng {event.date.split('/')[1]}</h3>
                <h2>{event.date.split('/')[0]}</h2>
              </div>
              <div className="col-6">
                <h2>{event.eventName}</h2>
                <h6>{event.location}</h6>
              </div>
              <div className="col-3">
                <h5>{event.tag}</h5>
                <h5>Map</h5>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </>
  )
}
