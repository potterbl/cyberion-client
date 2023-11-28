import React from 'react';

import '../styles/VideosSection.css'

const VideosSection = () => {
    return (
        <div className="videos-section">
            <div className="videos-section_col">
                <iframe width="100%" style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/XCTxIDiQN7k?si=1tDZWMZ9lxu0WhBK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="body-text-bigger">Що обрати: стартап або <span className="span-yellow">бізнес по
                    франшизі?</span></p>
            </div>
            <div className="videos-section_col">
                <iframe width="100%" style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/lHo0rmh25ug?si=Aty0Orh7EVoBKblU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="body-text-bigger"><span className="span-yellow">ТОП питань</span> перед купівлею
                    франшизи кіберклубу</p>
            </div>
            <div className="videos-section_col">
                <iframe width="100%" style={{aspectRatio: '16/9'}} src="https://www.youtube.com/embed/cNtZtW_HhoI?si=JAlauzv7DJ2BdYu1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="body-text-bigger">Відкриття нової кіберарени <span className="span-yellow">CYBERION</span> у місті <span className="span-yellow">Київ</span></p>
            </div>
        </div>
    );
};

export default VideosSection;
