/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here

    ENV.s3 = {
      accessKeyId: 'AKIAJUDQSSNN5NGMBJWQ',
      secretAccessKey: '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',
      bucket: 'soliton-staging.nebulab.it',
      region: 'eu-central-1'
    };

    ENV['s3-index'] = {
      accessKeyId: 'AKIAJUDQSSNN5NGMBJWQ',
      secretAccessKey: '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',
      bucket: 'soliton-staging.nebulab.it',
      region: 'eu-central-1'
    };

    ENV.pipeline = {
      activateOnDeploy: true
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here

    ENV.s3 = {
      accessKeyId: 'AKIAJUDQSSNN5NGMBJWQ',
      secretAccessKey: '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',
      bucket: 'soliton.nebulab.it',
      region: 'eu-central-1'
    };

    ENV['s3-index'] = {
      accessKeyId: 'AKIAJUDQSSNN5NGMBJWQ',
      secretAccessKey: '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',
      bucket: 'soliton.nebulab.it',
      region: 'eu-central-1'
    };

    ENV.pipeline = {
      activateOnDeploy: true
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
