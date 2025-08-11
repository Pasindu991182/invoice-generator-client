import React from 'react';
import { templates } from '../assets/assets';

const TemplateGrid = ({ onTemplateClick }) => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {templates.map(({ id, label, image }) => (
          <div key={id} className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => onTemplateClick(id)}
            >
              <img
                src={image}
                alt={label}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-semibold">{label}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGrid;
