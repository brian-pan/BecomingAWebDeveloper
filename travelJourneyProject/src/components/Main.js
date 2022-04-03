import "../styles/App.scss";

const Main = () => {
  return (
    <div className="main">
      <section className="card--body">
        <div className="card--image">
          <img src="../assets/images/image-fuji.jpg" alt="image fuji" />
        </div>
        <div className="card--content">
          <h3 className="card--location">Japan</h3>
          <h1 className="card--title">Mount Fuji</h1>
          <h2 className="card--date">12 Jan, 2021 - 24 Jan, 2021</h2>
          <p className="card--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            similique dolore architecto, voluptate quod quia ducimus consectetur
            corporis mollitia tempore provident accusamus?
          </p>
        </div>
      </section>
      <section className="card--body">
        <div className="card--image">
          <img
            src="../assets/images/image-toronto-cntower.jpg"
            alt="image cn tower"
          />
        </div>
        <div className="card--content">
          <h3 className="card--location">Toronto</h3>
          <h1 className="card--title">CN Tower</h1>
          <h2 className="card--date">Mar, 2022</h2>
          <p className="card--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            provident corporis odit nesciunt velit quos praesentium sapiente!
            Illum quae consequuntur tempora!
          </p>
        </div>
      </section>
      <section className="card--body">
        <div className="card--image">
          <img
            src="../assets/images/image-toronto-cntower.jpg"
            alt="image cn tower"
          />
        </div>
        <div className="card--content">
          <h3 className="card--location">Changchun, China</h3>
          <h1 className="card--title">Guilin Street</h1>
          <h2 className="card--date">10 Sept, 2019</h2>
          <p className="card--description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            iusto esse culpa reiciendis ut possimus laboriosam dolores porro hic
            vero, dolor qui optio nisi repellat illo, ad tempore. Dignissimos,
            blanditiis!
          </p>
        </div>
      </section>
    </div>
  );
};
export default Main;
