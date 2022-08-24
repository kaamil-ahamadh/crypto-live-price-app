import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="center">
      <div class="card">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-6 py-1">
            <div class="h-3 bg-slate-700 rounded"></div>
            <div className="center">
              <div class="rounded-full bg-slate-700 h-[50px] w-[50px]"></div>
            </div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="skeleton-loader-item"></div>
                <div class="skeleton-loader-item"></div>
                <div class="skeleton-loader-item"></div>
                <div class="skeleton-loader-item"></div>
                <div class="skeleton-loader-item"></div>
              </div>
              <div class="skeleton-loader-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
