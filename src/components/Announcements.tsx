import React from 'react';

const Announcements = () => {
  const announcements = [
    'ELECTRONIC PUBLIC OFFERING',
    'LISTED COMPANY DISCLOSURE',
    'LISTED COMPANY FINANCIAL REPORT',
    'ANNOUNCEMENT'
  ];

  return (
    <div className="announcements">
      <h3>Announcements</h3>
      <div className="announcement-list">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <span className="announcement-arrow">›</span>
            <span className="announcement-text">{announcement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;