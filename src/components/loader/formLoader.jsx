import React from 'react';

const FormLoader = () => {
  return (
    <div className="settings-container__update">
      <div className="settings-container__update__inputFlex">
        <div className="input-loader">
          <div className="skeleton-title"></div>
          <div className="skeleton-input"></div>
        </div>
        <div className="input-loader">
          <div className="skeleton-title"></div>
          <div className="skeleton-input"></div>
        </div>
      </div>
      <div>
        <div className="input-loader">
          <div className="skeleton-title"></div>
          <div className="skeleton-input"></div>
        </div>
      </div>
      <div className="settings-container__update__textarea">
        <div className="skeleton-title"></div>
        <div className="skeleton-textarea"></div>
      </div>
      <div className="create-program__btn">
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default FormLoader;
