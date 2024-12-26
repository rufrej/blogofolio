export function Slider() {
  return (
    <div className="all">
      <input checked type="radio" name="respond" id="desktop" />
      <article id="slider">
        <input checked type="radio" name="slider" id="switch1" />
        <input type="radio" name="slider" id="switch2" />
        <input type="radio" name="slider" id="switch3" />
        <input type="radio" name="slider" id="switch4" />
        <input type="radio" name="slider" id="switch5" />
        <div id="slides">
          <div id="overflow">
            <div className="image">
              <article>
                <img src="1.jpg" />
              </article>
              <article>
                <img src="2.jpg" />
              </article>
              <article>
                <img src="3.jpg" />
              </article>
              <article>
                <img src="4.jpg" />
              </article>
              <article>
                <img src="5.jpg" />
              </article>
            </div>
          </div>
        </div>
        <div id="controls">
          <label htmlFor="switch1"></label>
          <label htmlFor="switch2"></label>
          <label htmlFor="switch3"></label>
          <label htmlFor="switch4"></label>
          <label htmlFor="switch5"></label>
        </div>
        <div id="active">
          <label htmlFor="switch1"></label>
          <label htmlFor="switch2"></label>
          <label htmlFor="switch3"></label>
          <label htmlFor="switch4"></label>
          <label htmlFor="switch5"></label>
        </div>
      </article>
    </div>
  );
}
