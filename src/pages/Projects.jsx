import { useState } from "react";
import "./Projects.css";

function Projects() {
  const eduGatorImages = [
    "/edugator/home.png",
    "/edugator/courses.png",
    "/edugator/calendar.png",
    "/edugator/inbox.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === eduGatorImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? eduGatorImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        {/* ================= EduGator ================= */}

        <div className="project-card">
          <div className="project-image">
            <img
              src={eduGatorImages[currentImage]}
              alt="EduGator"
              className="main-image"
            />

            <button
              className="left-btn"
              onClick={prevImage}
            >
              ❮
            </button>

            <button
              className="right-btn"
              onClick={nextImage}
            >
              ❯
            </button>

            <div className="dots">
              {eduGatorImages.map((image, index) => (
                <span
                  key={index}
                  className={
                    currentImage === index
                      ? "dot active-dot"
                      : "dot"
                  }
                  onClick={() => setCurrentImage(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="project-content">
            <h2>EduGator 校園網站</h2>

            <p>
              這是一個模擬校園資訊平台，提供教師搜尋、
              教師評價、登入系統、課程管理及個人資料管理等功能。
            </p>

            <p>
              我主要負責前端介面設計與功能開發，
              並與後端組員共同規劃網站流程及使用者體驗。
            </p>

            <h3>Tech Stack</h3>

            <div className="tech-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        {/* ================= To Do List ================= */}

        <div className="project-card">
          <div className="project-image">
            <img
              src="/todo.png"
              alt="To Do List"
              className="main-image"
            />
          </div>

          <div className="project-content">
            <h2>To Do List</h2>

            <p>
              為了熟悉 React的Component跟State ，
              我製作了一個簡單的待辦事項管理網頁。
            </p>

            <p>
              使用者可以新增、編輯及刪除待辦事項，
              並利用 React State 即時更新畫面，
              加深對 React 基礎開發流程的理解。
            </p>

            <h3>Tech Stack</h3>

            <div className="tech-list">
              <span>React</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;