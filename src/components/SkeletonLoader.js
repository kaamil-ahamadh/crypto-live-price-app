import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="center">
      <div className="card">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-3 bg-slate-700 rounded"></div>
            <div className="center">
              <div className="rounded-full bg-slate-700 h-[50px] w-[50px]"></div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="skeleton-loader-item"></div>
                <div className="skeleton-loader-item"></div>
                <div className="skeleton-loader-item"></div>
                <div className="skeleton-loader-item"></div>
                <div className="skeleton-loader-item"></div>
              </div>
              <div className="skeleton-loader-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
