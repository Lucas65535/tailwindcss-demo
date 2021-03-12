import React from 'react';

export default function Index() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg">Tailwindcss GROWEX</h1>
        <p>Logo</p>
      </div>

      <div className="px-4">
        <h3 className="text-h3 text-center text-grayPrimary tracking-wide">
          want to <span className="text-primary">speed less time</span> on social medias
      </h3>

        <h2 className="text-grayTertiary text-center tracking-wider leading-6">
          Amazing things will happen when you connect your social media accounts with GROWEX
      </h2>

        <input type="email" placeholder="ex: gmail@gmail.com" />
        <button>Get Start for free</button>
      </div>
    </div>
  );
}