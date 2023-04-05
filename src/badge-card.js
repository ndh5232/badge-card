import { LitElement, html, css } from 'lit';

export class BadgeCard extends LitElement {
  static get properties() {
    return {
    version: {
      type: String,
      reflect: true
    }
    }
  };

  static get styles() {
    return css`
    body {
  background-color: #e9ecf3;
}

.white-box {
  width: 3000px;
  height: 75px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

.white-box h1 {
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-left: 300px; /* change this value */
  color: #666666;
  font-family: "Effra", sans-serif;
  font-size: 18.2px;
}
.second-white-box {
  width: 54px;
  height: 234px;
  background-color: #ffffff;
  position: absolute;
  top: 100px; /* change this value */
  left: 300px; /* change this value */
}
.explore-text {
  position: absolute;
  top: 120px;
  left: 380px;
  font-weight: thin;
  margin: 0;
  padding: 0;
  color: black;
  font-family: "Effra", sans-serif;
  font-size: 36px;
}
.explore-box {
  width: 1156px;
  height: 253px;
  background-color: #ffffff;
  position: absolute;
  top: 180px; /* adjust as needed */
  left: 380px; /* adjust as needed */
  font-family: "Effra", sans-serif;
  font-size: 24px;
  font-weight: thin;
  padding: 10px;
  line-height: 1.5;
  color: #333333;
}
.search-container {
  position: absolute;
  top: 320px;
  left: 380px;
  z-index: 1;
}


.search-form {
  width: 100%;
  max-width: 500px;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 1150px;
}

.form-control {
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 300;
  color: #333;
}

.search-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.fa-search {
  font-size: 1.5rem;
  color: #666;
}
.badge-box {
  width: 1156px;
  height: 211px;
  background-color: #ffffff;
  position: absolute;
  top: 470px;
  left: 380px;
  font-family: "Effra", sans-serif;
  font-size: 18px;
  font-weight: normal;
  color: #666666;
  padding: 10px;
  line-height: 1.5;
}









    `;
  }

  constructor() {
    super();
    const stuff = "things";
    this.version = `I love ${stuff}`;
  }

  render() {
    return html`
    <div class="white-box"></div>
<div class="white-box"><h1>Penn State Digital Badges</h1></div>
<div class="second-white-box"></div>
<<div class="second-white-box"></div>
<span class="explore-text">Explore</span>
<div class="explore-box">
  Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics.
</div>
<div class="search-container">
  <form class="search-form" id="searchForm" action="" method="get">
    <div class="search-input">
      <input type="text" class="form-control" id="q" name="q" placeholder="Search Content, Topics, and People" aria-label="Search" />
      <button type="submit" class="search-btn"><i class="fa fa-search"></i></button>
    </div>
  </form>
</div>

<div class="badge-box">
  Looking for something brand spankin' new? Here are the most recently added badges!
</div>









    `;
  }
}

customElements.define('badge-card', BadgeCard);