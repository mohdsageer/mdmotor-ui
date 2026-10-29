import React from "react";
import { ourWorkContent, workVideos } from "./data/gargageData";
import "./OurWork.scss";

function OurWork() {
  return (
    <section className="our-work" id="our-work">
      <div className="our-work-container">
        <div className="our-work-heading">
          <span>{ourWorkContent.eyebrow}</span>
          <h2>{ourWorkContent.title}</h2>
          <p>{ourWorkContent.description}</p>
        </div>

        <div className="work-video-grid">
          {workVideos.map((video) => {
            let embedUrl =`https://www.youtube.com/embed/${video.videoId}`


            return (
              <article className="work-video-card" key={video.id}>
                <div className="work-video">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    />   
                </div>
                <h3>{video.title}</h3>
              </article>
            );
          })}
        </div>

        <div className="work-social-links">
          <a
            href={ourWorkContent.youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurWork;