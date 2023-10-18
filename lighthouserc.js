module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerReadyTimeout: 10000000,
        startServerCommand: 'npm run prerender',
        startServerReadyPattern: /^Angular Live Development Server is listening/,
        url: ['http://localhost:4000/'],
        settings: {
          onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
          skipAudits: ['uses-http2'],
          chromeFlags: '--no-sandbox',
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
