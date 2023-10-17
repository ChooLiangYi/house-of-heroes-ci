module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        startServerReadyTimeout: 100000,
        startServerCommand: 'npm run start',
        startServerReadyPattern: /^Angular Live Development Server is listening/,
        url: ['http://localhost:4200/'],
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
