import React from 'react';

const Resources = () => {
  return (
    <section className="py-16 " id="resources">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Weekly Resources</h2>
        <p className="text-lg text-gray-600 mb-8">
          Access sermons, study materials, and guides to help you grow in faith. You can also make them available offline.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-red-600">How to Access Offline</h3>
          <ol className="list-decimal text-left space-y-2 text-gray-700 px-6">
            <li>Click the folder link below</li>
            <li>Tap the three dots beside any file</li>
            <li>Select <span className="font-semibold">“Available offline”</span></li>
          </ol>

          <a
            href="https://drive.google.com/drive/folders/1ZpMZeTUu-ggNbnvVx69Dgg79v9gRxpXR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition"
          >
            Open Google Drive Folder
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
