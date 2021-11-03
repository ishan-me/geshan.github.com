/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04a08f7426079a068023f1f450f7a8b6"
  },
  {
    "url": "about/index.html",
    "revision": "56ad56f20d3fce105099af341070c4ec"
  },
  {
    "url": "admin-blog/index.html",
    "revision": "b0da8e8b7019a9833bc6c62fa9611ce5"
  },
  {
    "url": "blog/2007/03/trying-to-define-web-20/index.html",
    "revision": "9ff2ea1db235b7eb177d87bbb896b272"
  },
  {
    "url": "blog/2007/11/10-web-by-things-technology-student-or/index.html",
    "revision": "35dbf86257edfa4af88acc0b3767f75c"
  },
  {
    "url": "blog/2007/11/drupal-how-to-for-beginners-and-all/index.html",
    "revision": "686bab847455c39ea7ef0b0c09212ffd"
  },
  {
    "url": "blog/2007/12/drupal-how-to-550-downloads-in-5-weeks/index.html",
    "revision": "e3b20a53d9a0343cc5a3126414438a7b"
  },
  {
    "url": "blog/2007/12/santa-make-css-fully-programmable/index.html",
    "revision": "2cf1bd658eac79fae4da30108306e27e"
  },
  {
    "url": "blog/2007/12/stylish-floating-login-box-in-drupal/index.html",
    "revision": "7ea55134d62f11ecfd462204010e87fa"
  },
  {
    "url": "blog/2007/12/yis-durpal-how-to-makes-news-cms-wire/index.html",
    "revision": "55d82f274c683eb31bf9f500f9e4ecfb"
  },
  {
    "url": "blog/2008/01/getting-multiple-values-from-single/index.html",
    "revision": "c8a8b00d61c4a6a4beb31af128aa0b7a"
  },
  {
    "url": "blog/2008/02/drupal-experience-sharing-at-prime/index.html",
    "revision": "0b341e16441283974a02c0f8bf5e71ee"
  },
  {
    "url": "blog/2008/03/drupal-how-to-downloaded-1000-times/index.html",
    "revision": "ca1b4709fb9161f25d0090905fa02d2e"
  },
  {
    "url": "blog/2008/03/drupalmodulescom-must-for-every-drupal/index.html",
    "revision": "21bf843371548c83c69686e60a63bb3c"
  },
  {
    "url": "blog/2008/04/giving-out-custom-rss-from-your-drupal/index.html",
    "revision": "a6b0622f877848127d96828de35d6d5b"
  },
  {
    "url": "blog/2008/06/taming-drupal-node-teaser-and-node/index.html",
    "revision": "06f7570d62f5b4ee285f6cf7e4cce20a"
  },
  {
    "url": "blog/2008/07/10-must-have-drupal-modules/index.html",
    "revision": "dafc2b35d9eb7dab7c53fed909bd951a"
  },
  {
    "url": "blog/2008/08/5-drupal-themes-ive-worked-on/index.html",
    "revision": "532e77580a32ee597d3ed5828ae5c0f4"
  },
  {
    "url": "blog/2008/08/5-must-subscribe-drupal-rss-feeds/index.html",
    "revision": "3657485dc29e34b2864e2df95c6c23e7"
  },
  {
    "url": "blog/2008/08/7-well-designed-drupal-sites/index.html",
    "revision": "9d75a888ed10c5e514c01a70d730b850"
  },
  {
    "url": "blog/2008/08/dozen-websites-drupal-user-should-not/index.html",
    "revision": "1e11d43af7903cb7b739571c77b8523e"
  },
  {
    "url": "blog/2008/09/software-freedom-day-sfd-2008-ok-affair/index.html",
    "revision": "87c6945d62e92729d4c359ea12f01e53"
  },
  {
    "url": "blog/2008/10/5-suggestions-to-top-7-out-of-standard/index.html",
    "revision": "f0329f1d3ac1f8167472e9e1d5f85704"
  },
  {
    "url": "blog/2008/10/5-undermined-drupal-modules-i-have/index.html",
    "revision": "cc793be2f2df0955635a681a99e2350b"
  },
  {
    "url": "blog/2008/10/5-useful-sites-to-blogger-user/index.html",
    "revision": "9adbdbb58e9dea4312157d3e9104e94e"
  },
  {
    "url": "blog/2008/10/top-7-nepali-websites-out-of-standards/index.html",
    "revision": "3d0fbf48a622bfef9058bb02a295a995"
  },
  {
    "url": "blog/2008/11/4-ways-to-develop-your-php-website-or/index.html",
    "revision": "eaa8d859f5d167d98cec5ab2aebe18d4"
  },
  {
    "url": "blog/2008/11/solving-drupal-contact-problems-with/index.html",
    "revision": "42eb593491b58dd9abb842672d88c745"
  },
  {
    "url": "blog/2008/12/drupal-defined-for-newbies/index.html",
    "revision": "eb19e0fc1d820052d2470261af2b09f1"
  },
  {
    "url": "blog/2008/12/start-learning-php-with-slides-and_23/index.html",
    "revision": "e9275c0c3332b2d91c5d60ffe0f1e14a"
  },
  {
    "url": "blog/2008/12/start-learning-php-with-slides-and_29/index.html",
    "revision": "b09564bb6989f0d86c3a1321268c8d12"
  },
  {
    "url": "blog/2008/12/start-learning-php-with-slides-and/index.html",
    "revision": "e36ee2148791184a7fc4f1c5a32a733e"
  },
  {
    "url": "blog/2008/12/taming-drupal-node-teaser-and-node/index.html",
    "revision": "cc74d02ccdfeca6c334cecddc9abc6a1"
  },
  {
    "url": "blog/2009/01/start-learning-php-with-slides-and/index.html",
    "revision": "4c67e2ba547795fa2f06c0205e0b63b0"
  },
  {
    "url": "blog/2009/02/3-drupal-podcasts-you-must-be-fool-to/index.html",
    "revision": "24eafa2d8bf788d96023aabb553b0797"
  },
  {
    "url": "blog/2009/02/random-header-image-on-page-refresh/index.html",
    "revision": "c167fe93112388b38f2e13f652548955"
  },
  {
    "url": "blog/2009/03/apply-multiple-drupal-themes-for/index.html",
    "revision": "50989c163d60f94d8d5c74852923ed31"
  },
  {
    "url": "blog/2009/05/tweak-and-create-new-drupal-themes-like/index.html",
    "revision": "d707afdd1c179c3f4d89f41d51166aea"
  },
  {
    "url": "blog/2009/06/5-great-designed-drupal-themes/index.html",
    "revision": "a830b35e273b8bb15bc30293f55bd955"
  },
  {
    "url": "blog/2009/07/drupal-meetup-kathmandu-event-to-be-in/index.html",
    "revision": "e9dc238d6f9e56ad32926255fd90674f"
  },
  {
    "url": "blog/2009/08/drupal-7-features-to-watch-out-for/index.html",
    "revision": "0d3285c46c081a991f5ba185e23239c1"
  },
  {
    "url": "blog/2009/08/frist-barcamp-kathmandu-bcktm09-was/index.html",
    "revision": "3f3e12c9e7223ec961b7c6ebb69f63e9"
  },
  {
    "url": "blog/2009/10/drupal-is-more-popular-than-you-may/index.html",
    "revision": "f8408415542b3ac2065805048732e14e"
  },
  {
    "url": "blog/2009/11/control-book-outline-form-and-menu-for/index.html",
    "revision": "113d5fa03710644d70572a067eb76495"
  },
  {
    "url": "blog/2009/11/show-drupal-blocks-only-on-specific/index.html",
    "revision": "dabb13d8577f959a43fe1c84416d30b1"
  },
  {
    "url": "blog/2010/02/happy-3rd-birthday-hamrolyicscom-and-my/index.html",
    "revision": "a4c3548868e2dcef99eca46688a8b77f"
  },
  {
    "url": "blog/2010/03/3-codeigniter-libraries-that-will-make/index.html",
    "revision": "5ccdc8b2fb236ee1b78b48d983887e90"
  },
  {
    "url": "blog/2010/03/5-websites-to-list-showcase-and-promote/index.html",
    "revision": "28e0664228338b5d99e76a0aaab939a9"
  },
  {
    "url": "blog/2010/03/top-x-contributors-drupal-module-to/index.html",
    "revision": "30f63cdf1c74d35224cfc9f96a0fce33"
  },
  {
    "url": "blog/2010/04/7-drupal-modules-to-improve-seo-of-your/index.html",
    "revision": "9b8ff4e024960ae2b48c8083fea708e6"
  },
  {
    "url": "blog/2010/06/recording-first-yipl-podcast-was/index.html",
    "revision": "5b40cedd24a0c9bacf43a0007b3a896f"
  },
  {
    "url": "blog/2010/08/chicken-and-egg-problem-with-technology/index.html",
    "revision": "fdf7e4e06c5e623c3b4ab16343645ebe"
  },
  {
    "url": "blog/2010/08/drupal-non-technical-introduction-at/index.html",
    "revision": "acb20da82ce1bfecf78d2d5bb6011389"
  },
  {
    "url": "blog/2010/10/how-about-business-intelligence-at-bhat/index.html",
    "revision": "7f4094a1dc782c18d6bc940da373bf77"
  },
  {
    "url": "blog/2010/12/how-to-limit-time-you-spend-on-facebook/index.html",
    "revision": "e91181ec195c528bc3e76a0d2bfbe74e"
  },
  {
    "url": "blog/2011/09/5-5-very-useful-websites-for-every/index.html",
    "revision": "aa203a49aa74d2ee4d88dc0e08f8a1aa"
  },
  {
    "url": "blog/2011/10/drupal-cms-technical-introduction/index.html",
    "revision": "31e5f44a57105c021ec51bbdc867822e"
  },
  {
    "url": "blog/2011/11/drupal-7-must-have-modules-content-type/index.html",
    "revision": "b0b85398143209211aa7a5779b1c67f2"
  },
  {
    "url": "blog/2011/11/how-to-install-drupal-7-and-basic/index.html",
    "revision": "31d68dcbb3e5a0f9dcaa96b95f7d0da9"
  },
  {
    "url": "blog/2012/02/git-introduction-and-hand-on-usage/index.html",
    "revision": "5855df92a5506b78dfd5fd6ab55a794b"
  },
  {
    "url": "blog/2013/03/5-amazing-free-productivity-apps/index.html",
    "revision": "e7aa1a7de3a53d6fabc00649870c4fac"
  },
  {
    "url": "blog/2013/06/working-for-dev-shop-with-projects-vs/index.html",
    "revision": "c2086a6f71eeeb11f3e4ae2bcffaec56"
  },
  {
    "url": "blog/2014/01/5-php-development-improvements/index.html",
    "revision": "1a239380cce05508dc79dbe6a99138b7"
  },
  {
    "url": "blog/2014/02/ingredients-of-great-front-end/index.html",
    "revision": "5bbf47e077b7a65c6b0c6e9987792501"
  },
  {
    "url": "blog/2014/02/using-phpunit-data-provider-for-less/index.html",
    "revision": "7e3cd1758e72d9eb8595b8469830aae2"
  },
  {
    "url": "blog/2014/06/5-free-apps-to-bootstrap-your-budding/index.html",
    "revision": "17b693bcdbb4af32392fe027ba990e95"
  },
  {
    "url": "blog/2014/07/3-bundles-to-get-started-with-rest-in/index.html",
    "revision": "fc25f6fba36539662cbe29cebdb293a9"
  },
  {
    "url": "blog/2014/07/4-git-tips-beyond-basics/index.html",
    "revision": "7816700fa7323f6947e256a97c221b9b"
  },
  {
    "url": "blog/2014/07/getting-started-with-php-lemp-on-vagrant/index.html",
    "revision": "7413b5d5101a1913b43723ef64f6d57a"
  },
  {
    "url": "blog/2014/08/basic-overview-of-message-queues-rabbit/index.html",
    "revision": "5d61a85d36be739fa4e49a16f0ec7747"
  },
  {
    "url": "blog/2014/08/things-i-wished-i-knew-while-doing-my/index.html",
    "revision": "35fdb80c829c77c6379fb4b93d6bc309"
  },
  {
    "url": "blog/2014/12/do-you-git-your-code-follow-this-simplified-gitflow-model/index.html",
    "revision": "21681873d230b6abd38e664569781d73"
  },
  {
    "url": "blog/2014/12/how-to-become-a-better-software-company-technically-slides-and-video/index.html",
    "revision": "d902db99413fb597d5a5042757d0e045"
  },
  {
    "url": "blog/2015/05/software-engineering-practices-in-nepal-infographics-part-1-includes-languages/index.html",
    "revision": "64f1afdaacf8d8b8913f64520cf2a646"
  },
  {
    "url": "blog/2015/05/software-engineering-practices-in-nepal-infographics-part-2-includes-git/index.html",
    "revision": "8478a21f5c9ad078fc4a739ad23255a6"
  },
  {
    "url": "blog/2015/05/software-engineering-practices-in-nepal-infographics-part-3-includes-devops/index.html",
    "revision": "a629df5e495c4c1a90fa4177fca191ca"
  },
  {
    "url": "blog/2015/05/software-engineering-practices-in-nepal-infographics-part-4-includes-project-management/index.html",
    "revision": "23f855eb13694e7025c3b491bb30dc1f"
  },
  {
    "url": "blog/2015/07/5-things-to-do-for-your-open-source-php-projects/index.html",
    "revision": "975ffdbd96946694555ec1c8df311a3c"
  },
  {
    "url": "blog/2015/07/getting-started-with-unit-testing-in-laravel/index.html",
    "revision": "ee8aa8e52d72c3702488dd943e572e25"
  },
  {
    "url": "blog/2015/07/how-to-split-a-new-feature-into-independent-parts-before-coding-it/index.html",
    "revision": "ca53882bf82633de033d181b423b94d9"
  },
  {
    "url": "blog/2015/08/5-things-to-consider-when-deploying/index.html",
    "revision": "9ef25c3f605df17789fabdb97acf642d"
  },
  {
    "url": "blog/2015/08/building-you-next-product/index.html",
    "revision": "dd540e5f49691583e7189fce68b622ab"
  },
  {
    "url": "blog/2015/08/importance-of-logging-in-your-applications/index.html",
    "revision": "cd44b03014efd229a27aa40d4b5eadee"
  },
  {
    "url": "blog/2015/08/the-best-automated-deployment-tool-the-one-that-fits-your-needs/index.html",
    "revision": "3206326613622ae297049e553860284e"
  },
  {
    "url": "blog/2015/09/how-to-use-simplified-gitflow-branching-model-video/index.html",
    "revision": "23bb11e53fbcd0df2eff5e15618f8446"
  },
  {
    "url": "blog/2015/10/3-podcasts-every-software-engineer-slash-developer-should-subscribe-to/index.html",
    "revision": "0e8134a34fe59964c529011477c54575"
  },
  {
    "url": "blog/2015/10/4-pillars-of-a-solid-software-application-and-tools-to-support-it/index.html",
    "revision": "e3dd348b07a22d4f95ce044724f44da9"
  },
  {
    "url": "blog/2015/10/getting-started-with-laravel-mariadb-mysql-docker/index.html",
    "revision": "a8d5e4bec6134c4e325a7ea4735369bc"
  },
  {
    "url": "blog/2015/11/3-weeklies-every-software-engineer-slash-developer-should-subscribe-to/index.html",
    "revision": "601d2b29dde75f71f17467c83f0a8875"
  },
  {
    "url": "blog/2016/03/10-software-engineering-proverbs-slash-quotes-i-wrote-in-the-past-months/index.html",
    "revision": "8f4ed6483caa19f8d12a4cda9bcc13c5"
  },
  {
    "url": "blog/2016/03/there-are-only-two-types-of-automated-software-tests/index.html",
    "revision": "f0e856897620ca7e223d54fe2b8cbec9"
  },
  {
    "url": "blog/2016/03/wercker-ci-the-best-ci-slash-cd-service-is-free-till-now/index.html",
    "revision": "bee87ba573e4803cb76165e7ce960a0f"
  },
  {
    "url": "blog/2016/04/3-simple-rules-for-less-or-no-git-conflicts/index.html",
    "revision": "e087ea9b1d898f2111b3d59eb0fac382"
  },
  {
    "url": "blog/2016/04/embrace-chatops-stop-installing-deployment-software/index.html",
    "revision": "ea32b969da49a152a77540a19fdb4f6d"
  },
  {
    "url": "blog/2016/05/3-podcasts-every-software-engineer-slash-developer-should-subscribe-to-part-2/index.html",
    "revision": "cc3f5e21dadb4f7e6a01c749220097e7"
  },
  {
    "url": "blog/2016/06/career-paths-for-to-be-tech-graduates-slides/index.html",
    "revision": "be452e4e4685037ffa312ea81e28ce48"
  },
  {
    "url": "blog/2016/06/php-developers-nepal-meetup-number-16-a-round-up-and-my-simpilfied-gitflow-talk/index.html",
    "revision": "13f7f8355a2897f9acb82690ffb8e4ad"
  },
  {
    "url": "blog/2016/08/number-laraconeu-2016-was-a-great-experience-overall/index.html",
    "revision": "d76d39819b2c1230ebba85044b0875c9"
  },
  {
    "url": "blog/2016/09/how-to-do-a-minimum-viable-feature-switch/index.html",
    "revision": "881ae496b1a19751ea974c0f1aa32312"
  },
  {
    "url": "blog/2016/09/some-useful-resources-for-conference-speakers-and-wanna-be-speakers/index.html",
    "revision": "fb824389b3cb9f3d99d4ec23e5d1c562"
  },
  {
    "url": "blog/2016/11/different-types-of-web-hosting-compared-to-types-of-housing/index.html",
    "revision": "d53da97877a843df9900afa9888fe229"
  },
  {
    "url": "blog/2017/01/3-podcasts-every-software-engineer-slash-developer-should-subscribe-to-part-3/index.html",
    "revision": "95839e114e7f39b7e1e5935d16df52ab"
  },
  {
    "url": "blog/2017/02/things-i-wished-i-knew-as-a-junior-developer-slides/index.html",
    "revision": "422b14f101c2b45ed58a290b42293dbb"
  },
  {
    "url": "blog/2017/05/how-to-use-docker-compose-with-virtual-hosts-and-services-like-db-for-dev-environment/index.html",
    "revision": "e16e7686f6c6b459c13b672fc4f52b15"
  },
  {
    "url": "blog/2017/06/software-companies-tech-competency-matrix/index.html",
    "revision": "8b93c5b480c60556159d32ad08801919"
  },
  {
    "url": "blog/2017/08/adopt-a-painless-continuous-delivery-culture/index.html",
    "revision": "ac275e5023763859627b9ed4ac86634e"
  },
  {
    "url": "blog/2017/08/convert-your-tech-hiring-funnel-into-an-hour-glass/index.html",
    "revision": "7697339984c40c4f8efed345de251228"
  },
  {
    "url": "blog/2018/04/how-to-do-a-zero-downtime-database-db-migration-schema-change-with-a-practical-example/index.html",
    "revision": "8abc502bedcd2b03265380397818fda2"
  },
  {
    "url": "blog/2018/09/7-practical-steps-to-land-your-first-tech-job/index.html",
    "revision": "dfa22ffbf59b53bfd3b9835cd15fc985"
  },
  {
    "url": "blog/2018/10/deployment-is-not-release/index.html",
    "revision": "6a188f96cf9d697867264cd8907fd763"
  },
  {
    "url": "blog/2018/10/dont-code-your-microservice-like-a-monolith/index.html",
    "revision": "8383b2de4fa35bf7d6e35b0438d834ce"
  },
  {
    "url": "blog/2018/10/dont-just-learn-a-new-language-slash-framework/index.html",
    "revision": "9f47784a8c761065b3c328afcd9341b0"
  },
  {
    "url": "blog/2018/10/moving-from-a-and-b-to-~150-microservices/index.html",
    "revision": "9565a9791abaef07b248e19b8db4aa04"
  },
  {
    "url": "blog/2018/10/why-use-docker-3-reasons-from-a-development-perspective/index.html",
    "revision": "0fc685c6f306362391a9c3efb5c41b4f"
  },
  {
    "url": "blog/2018/11/4-ways-docker-changed-the-way-software-engineers-work-in-past-half-decade/index.html",
    "revision": "026a84841f1c4900f35177c1eee71233"
  },
  {
    "url": "blog/2018/11/5-signs-that-reveal-your-software-development-process-is-agile-only-on-paper-and-solutions-for-them/index.html",
    "revision": "1562756d581e22a92e330bd4c74cea72"
  },
  {
    "url": "blog/2018/12/2018-in-review-5-most-viewed-posts-of-this-year/index.html",
    "revision": "b6e5f5359b4f58984caf1fe89ab59241"
  },
  {
    "url": "blog/2018/12/5-tech-medium-publications-software-engineers-should-strive-to-write-for/index.html",
    "revision": "beb68702ce7c3d4a189567e9e1c5193d"
  },
  {
    "url": "blog/2018/12/the-most-important-tip-for-beginner-software-engineers-is/index.html",
    "revision": "94eaace6233a185c3c320a1cf13b03ad"
  },
  {
    "url": "blog/2018/12/you-can-do-it-in-sql/index.html",
    "revision": "5b6278c1bb33ab2b52c57b61faa049be"
  },
  {
    "url": "blog/2019/01/getting-started-with-debugging-nodejs-applications-with-ndb/index.html",
    "revision": "92e739a8e70c444acf2543ed2883fe52"
  },
  {
    "url": "blog/2019/01/things-tech-recruiters-look-for/index.html",
    "revision": "26132c7e7ccda5be59a577e033f9a8de"
  },
  {
    "url": "blog/2019/03/follow-these-logging-best-practices-to-get-the-most-out-of-application-level-logging-slides/index.html",
    "revision": "fcbe94ca28ba04a2e4b27a2ecca813a0"
  },
  {
    "url": "blog/2019/07/podcasts-every-software-engineer-slash-developer-should-subscribe-to-part-4/index.html",
    "revision": "a2497bb408b3d74d5b155db61e70d429"
  },
  {
    "url": "blog/2019/10/get-laravel-6-running-on-google-cloud-run-step-by-step-with-ci/index.html",
    "revision": "823dcfbe6d823dc4921460784aa85198"
  },
  {
    "url": "blog/2019/11/from-0-to-working-serverless-url-for-a-containerized-app-with-google-cloud-run-slides-and-video/index.html",
    "revision": "70853bcdb3d7c989a695dbe70f58b781"
  },
  {
    "url": "blog/2019/11/how-to-efficiently-monitor-crons-with-a-simple-bash-trick/index.html",
    "revision": "b9e79b60812ce1158bd7dfec2111c232"
  },
  {
    "url": "blog/2019/11/how-to-run-symfony-on-google-cloud-run-with-the-demo-app-step-by-step-guide/index.html",
    "revision": "f6a02e6abe0449e5744b5658b27ead6b"
  },
  {
    "url": "blog/2019/11/how-to-use-docker-multi-stage-build/index.html",
    "revision": "0d70c112f9877701df35a6a11c456eb5"
  },
  {
    "url": "blog/2019/11/laracon-au-2019-overall-a-good-experience/index.html",
    "revision": "f39f4db20382aa4e9b19ecfed6aa0c6d"
  },
  {
    "url": "blog/2019/11/why-use-google-cloud-run-5-compelling-reasons/index.html",
    "revision": "595b75f4fdfbe451654bf410820f5f64"
  },
  {
    "url": "blog/2019/12/2019-year-in-review/index.html",
    "revision": "fc8ceae49c6400deb9b1ea3c8dc0f57c"
  },
  {
    "url": "blog/2019/12/how-to-get-your-pull-request-pr-merged-quickly/index.html",
    "revision": "4da54e82f4fddae44ecd98137f90cf95"
  },
  {
    "url": "blog/2019/12/repost-your-tech-blog/index.html",
    "revision": "d6aaeae23429dfc5a4cb12141f8b5300"
  },
  {
    "url": "blog/2020/02/difference-between-backend-frontend/index.html",
    "revision": "5955b7f3898d997991be8f444295d86f"
  },
  {
    "url": "blog/2020/04/5-tips-to-work-from-home-productively/index.html",
    "revision": "95c98ed77619634317069682ddf292ce"
  },
  {
    "url": "blog/2020/04/jamstack-tutorial-website-with-no-code-for-free/index.html",
    "revision": "a7ed7e9ba8bda2ce484e497da2619c2f"
  },
  {
    "url": "blog/2020/04/static-vs-dynamic-websites-jam-stack/index.html",
    "revision": "aa5bae2856212ca2be921de16a0c02e7"
  },
  {
    "url": "blog/2020/06/pair-programming-benefits-for-your-team/index.html",
    "revision": "3af65bc1fb18f1694848240c5e3477e7"
  },
  {
    "url": "blog/2020/08/things-tech-recruiters-look-for-in-your-resume-first-interview-part-02/index.html",
    "revision": "a652cace79b36d6008e8cbe4bad2ca4f"
  },
  {
    "url": "blog/2020/09/agile-software-development/index.html",
    "revision": "49e09895a9a52c9b33ad3baf94dd2d23"
  },
  {
    "url": "blog/2020/09/software-engineer-on-internal-product-vs-customer-facing-applications-/index.html",
    "revision": "fa6ae9751d348f7dddbd2002a7439085"
  },
  {
    "url": "blog/2020/09/software-engineering-podcasts-you-must-subscribe-to/index.html",
    "revision": "bf24cd08c2a8572f8fdce09fd922e589"
  },
  {
    "url": "blog/2020/09/take-home-coding-challenges-outshine-competition/index.html",
    "revision": "5ea6ba13c2bd5088e5bf37dcd8f2ded8"
  },
  {
    "url": "blog/2020/09/vegeta-load-testing-primer-with-examples/index.html",
    "revision": "391073114846acd8c38d8db10d04ae40"
  },
  {
    "url": "blog/2020/10/crucial-software-engineer-qualities/index.html",
    "revision": "2063717f22779b02e6ebe3a38da111d7"
  },
  {
    "url": "blog/2020/10/docker-build-example-faster-docker-build/index.html",
    "revision": "c4f0a4e8fa4b169b11aa09b78ba7a91b"
  },
  {
    "url": "blog/2020/10/free-productivity-software-increase-efficiency/index.html",
    "revision": "ed20f10bcabc645dedd52b145964e156"
  },
  {
    "url": "blog/2020/10/small-pull-requests/index.html",
    "revision": "5ddccb7ca8905f180cd2e9f351566038"
  },
  {
    "url": "blog/2020/10/start-tech-startup/index.html",
    "revision": "12ade773c75dae488ed84f7b7a1e0b2a"
  },
  {
    "url": "blog/2020/11/how-to-take-social-media-break/index.html",
    "revision": "b52e243f86635e8743bf61256e2a0fc7"
  },
  {
    "url": "blog/2020/11/nodejs-for-php-developers/index.html",
    "revision": "d464d7424e0cca8e0975023913a232ac"
  },
  {
    "url": "blog/2020/11/nodejs-microservices/index.html",
    "revision": "f2e84b2d76d1caba8fbb59f9c75f849d"
  },
  {
    "url": "blog/2020/11/nodejs-mysql-tutorial/index.html",
    "revision": "7ebaec0614a01ee8c07126b5c206b17a"
  },
  {
    "url": "blog/2020/11/nodejs-with-docker/index.html",
    "revision": "c0d3e92b1e0a0e582d5fcefb44a8b09b"
  },
  {
    "url": "blog/2020/11/phpunit-code-coverage-pcov/index.html",
    "revision": "a46ae1bd6bf59ee4592933c8b9b89de9"
  },
  {
    "url": "blog/2020/12/recap-review-2020/index.html",
    "revision": "57b51d138ca9273b2bb4fec54bebbbec"
  },
  {
    "url": "blog/2020/12/software-resilience/index.html",
    "revision": "2971651550e0621e070c99fd36f8623b"
  },
  {
    "url": "blog/2020/12/software-scalability/index.html",
    "revision": "b7ae66d65ae2a23bd119ea6fffeca165"
  },
  {
    "url": "blog/2021/01/free-nodejs-hosting/index.html",
    "revision": "999f8246116685677a782e6378c7375c"
  },
  {
    "url": "blog/2021/01/nodejs-express-helmet/index.html",
    "revision": "7891664e4ab5ef9a8fee48e22d470639"
  },
  {
    "url": "blog/2021/01/nodejs-logging-library/index.html",
    "revision": "ed88fd7c2e43273c9f5d3213187de12e"
  },
  {
    "url": "blog/2021/01/nodejs-postgresql-tutorial/index.html",
    "revision": "60c8c55601840ae3cab5b71b6d3c701a"
  },
  {
    "url": "blog/2021/01/phpunit-assertions/index.html",
    "revision": "b2ac4c63728dd0cdb0b35561bd35844f"
  },
  {
    "url": "blog/2021/02/javascript-memoization/index.html",
    "revision": "6730e6344aba2966e2d75cb5da0940cf"
  },
  {
    "url": "blog/2021/02/kubernetes-cron-job/index.html",
    "revision": "4e99e68b9b24b1c74dd562cf2dc165ed"
  },
  {
    "url": "blog/2021/02/nodemon/index.html",
    "revision": "dac66a78d2cba87656cb0435e8afe799"
  },
  {
    "url": "blog/2021/03/javascript-array-functions/index.html",
    "revision": "7faeaedc703780b739f63fde65ee2e05"
  },
  {
    "url": "blog/2021/03/nodejs-http-request/index.html",
    "revision": "1b90f5d0b0b17807016237dae8257064"
  },
  {
    "url": "blog/2021/04/sofware-deployment-tools/index.html",
    "revision": "b1fd52ebd7da28f644231497c104ef57"
  },
  {
    "url": "blog/2021/04/sofware-engineer-podcasts/index.html",
    "revision": "69df962871943ba082b947d868928074"
  },
  {
    "url": "blog/2021/05/nodejs-express-tutorial/index.html",
    "revision": "e05948a1290ca06b1594664bd406d4df"
  },
  {
    "url": "blog/2021/05/nodejs-redis/index.html",
    "revision": "cef52cf33e121e7b86fc04b6ff7c4bd1"
  },
  {
    "url": "blog/2021/06/life-changing-side-project/index.html",
    "revision": "4681e3e579da41b74db0747496533597"
  },
  {
    "url": "blog/2021/07/rabbitmq-docker-nodejs/index.html",
    "revision": "c3108f39c5e8ccb3e7aa57307d2268a0"
  },
  {
    "url": "blog/2021/07/tech-career-advice/index.html",
    "revision": "eedf66ca3632c1b83b05583609e150c4"
  },
  {
    "url": "blog/2021/09/web-scraping-nodejs/index.html",
    "revision": "828c7be101d9de9efed6ac11c92f747e"
  },
  {
    "url": "blog/2021/10/nodejs-read-file-line-by-line/index.html",
    "revision": "b08d573c6faef612e3e7824437bd17e4"
  },
  {
    "url": "blog/2021/10/nodejs-sqlite/index.html",
    "revision": "0ba778a184262fb39a8dbf00c3aaa88a"
  },
  {
    "url": "blog/archives/index.html",
    "revision": "4f74e9c2cf0e718b368cac93fb45cd36"
  },
  {
    "url": "blog/categories/about-me/index.html",
    "revision": "1b78ed4ed87eaf83823f7d03583ea2c4"
  },
  {
    "url": "blog/categories/agile/index.html",
    "revision": "a7ecabc60ece0774825bf2052224dbab"
  },
  {
    "url": "blog/categories/api/index.html",
    "revision": "acf50900e8c5e3f1202507edd3a1e041"
  },
  {
    "url": "blog/categories/apps/index.html",
    "revision": "beaaec64dfe8881a06c2d87c1fc4f86a"
  },
  {
    "url": "blog/categories/codeigniter/index.html",
    "revision": "241f57979fb981aa827f478a2526b864"
  },
  {
    "url": "blog/categories/database/index.html",
    "revision": "c6ae0227e3b8cb696d73a2dc4ee59762"
  },
  {
    "url": "blog/categories/deployment/index.html",
    "revision": "b4d3aef58ddddf632162653f48179364"
  },
  {
    "url": "blog/categories/devops/index.html",
    "revision": "e3b71278cb36ac75e16c9ba35a0a710b"
  },
  {
    "url": "blog/categories/docker/index.html",
    "revision": "a69eabb86cdf7a149c2b8d976c6b53fd"
  },
  {
    "url": "blog/categories/drupal/index.html",
    "revision": "606380311e287cfb9c6340472654f23a"
  },
  {
    "url": "blog/categories/feature-flags/index.html",
    "revision": "206d8a505a5f964982b905c03e1c917c"
  },
  {
    "url": "blog/categories/foss/index.html",
    "revision": "adb62865563247ca4365ce7dd9432526"
  },
  {
    "url": "blog/categories/git/index.html",
    "revision": "b9cc6bcfdc900aead20e727e5b302e6f"
  },
  {
    "url": "blog/categories/google-cloud-run/index.html",
    "revision": "ce7709d629947faa19748774bbc643d1"
  },
  {
    "url": "blog/categories/index.html",
    "revision": "e0ed6cbb29e02907d27b9cc768c9dd4f"
  },
  {
    "url": "blog/categories/infographics/index.html",
    "revision": "ba725d959908765d6fd05dfd3d9fbb94"
  },
  {
    "url": "blog/categories/jam-stack/index.html",
    "revision": "c38a4a5d74047c4ea696cdac5915ec75"
  },
  {
    "url": "blog/categories/javascript/index.html",
    "revision": "9c6fcec6bf04e08d1294a50cfc3b6567"
  },
  {
    "url": "blog/categories/jobs/index.html",
    "revision": "ed49ec23500c8311f37df08f904dfe78"
  },
  {
    "url": "blog/categories/kubernetes/index.html",
    "revision": "c9121fa3ec365cacc7f446293d20d9ee"
  },
  {
    "url": "blog/categories/laravel/index.html",
    "revision": "fd575618dc315bdc6a8e33e5bd4399eb"
  },
  {
    "url": "blog/categories/latestposts/index.html",
    "revision": "58c2ca9be3912171453826a66bf2e478"
  },
  {
    "url": "blog/categories/learn-php/index.html",
    "revision": "0f7bc01969a535ca029d656708970072"
  },
  {
    "url": "blog/categories/logging/index.html",
    "revision": "c77600c05a66479ebc8962cc69efc0e0"
  },
  {
    "url": "blog/categories/microservice/index.html",
    "revision": "45e00eca7d19118cb6b5b1b972a96a4b"
  },
  {
    "url": "blog/categories/misc/index.html",
    "revision": "60fce6e5b3c68f17de8bed9037a4a9b7"
  },
  {
    "url": "blog/categories/nodejs/index.html",
    "revision": "49b18a0320034b91a89cbca3e38d9172"
  },
  {
    "url": "blog/categories/php/index.html",
    "revision": "9579e23508bc91ddc8a580dbbbb1ef5c"
  },
  {
    "url": "blog/categories/programming/index.html",
    "revision": "30c9903cbe3a1b36e302ce2223e9cbda"
  },
  {
    "url": "blog/categories/rabbitmq/index.html",
    "revision": "08df6a94df812ceec2cb43b1e8c62d49"
  },
  {
    "url": "blog/categories/software-engineering/index.html",
    "revision": "c601155d8a6eaa3ebf20f9f0b926055f"
  },
  {
    "url": "blog/categories/sql/index.html",
    "revision": "357edf644f2e0b0fa1e332e1477d6238"
  },
  {
    "url": "blog/categories/symfony/index.html",
    "revision": "91ed8498eb271e4c440a8652d1a31c31"
  },
  {
    "url": "blog/categories/talks/index.html",
    "revision": "ffb30f296dfe9a2ec8e23f2eccad9ea4"
  },
  {
    "url": "blog/categories/technology/index.html",
    "revision": "b5b838f85d4126dc43f768a83b27a63c"
  },
  {
    "url": "blog/categories/testing/index.html",
    "revision": "1349b2151b84ab2032397dae8c4504e4"
  },
  {
    "url": "blog/categories/tutorial/index.html",
    "revision": "699d8f4b03fea8a4b8c556dc3f227932"
  },
  {
    "url": "blog/categories/web-development/index.html",
    "revision": "28d615834ca978953a98100d73009aec"
  },
  {
    "url": "css/avocado.css",
    "revision": "83356b17eeec5f23cc0e8ec67a2cbc11"
  },
  {
    "url": "css/avocado.min.css",
    "revision": "706573bccf7c200597bac4eb55e34d1f"
  },
  {
    "url": "css/index.css",
    "revision": "68b01472db529c6741da5d89beaab7b2"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "favicon.ico",
    "revision": "b62cbd85d34d10f735098ffadb7504c7"
  },
  {
    "url": "googleed62a2bdd3f25adf.html",
    "revision": "4607e19fa4a4c5f42e0589390b9476e7"
  },
  {
    "url": "images/10-quotes/01pills.jpg",
    "revision": "390c0f208331486ef0f63e1e0e2a169b"
  },
  {
    "url": "images/10-quotes/02PR.jpg",
    "revision": "fe254f3e2ca9baa64c50029da50e30e0"
  },
  {
    "url": "images/10-quotes/03test-ci-balance.jpg",
    "revision": "2be58e3b2a29015dc21fcea6f280826e"
  },
  {
    "url": "images/10-quotes/04test-ci-sword.jpg",
    "revision": "695d679b777df5b2d2c47cff794b6291"
  },
  {
    "url": "images/10-quotes/05follow-book.jpg",
    "revision": "1acd556d258d6c60f2043dfbaa2b3427"
  },
  {
    "url": "images/10-quotes/06pain-killer.jpg",
    "revision": "a58bb4364769db89782a418d536404de"
  },
  {
    "url": "images/10-quotes/07solution-importance.jpg",
    "revision": "11e0748fbe91d3e9b84afca4d2ee8688"
  },
  {
    "url": "images/10-quotes/08solution-abstract.jpg",
    "revision": "782f6ae3e6d19767d1477fb77e5e9e0e"
  },
  {
    "url": "images/10-quotes/09solution-value.jpg",
    "revision": "95cf7a59db9e9e16db93b5bc29a8d07f"
  },
  {
    "url": "images/10-quotes/10axe.jpg",
    "revision": "11291f36143d5684430662b109a83326"
  },
  {
    "url": "images/10-quotes/code-html-small.jpg",
    "revision": "c0af48253c7c0441a34e69f3b3c9a8f2"
  },
  {
    "url": "images/2019-recap/01featured.jpg",
    "revision": "064e00ed21094d307ab00f916d4b9353"
  },
  {
    "url": "images/2019-recap/02public-speaking-2019-full.jpg",
    "revision": "f2252b23a5890d7812d80481640c1bf7"
  },
  {
    "url": "images/2019-recap/02public-speaking-2019.jpg",
    "revision": "8dafaf789d535d084886d6b7d602ae2c"
  },
  {
    "url": "images/2019-recap/03blog-2019.jpg",
    "revision": "f30357bf581d4c16b3807db778aa9bd4"
  },
  {
    "url": "images/2019-recap/04side-project.jpg",
    "revision": "028d9c3a1bd115da5def72c618c1e500"
  },
  {
    "url": "images/2019-recap/05au-repo-full.jpg",
    "revision": "1dd02087a06a11ebf0098e43cd6d57ed"
  },
  {
    "url": "images/2019-recap/05au-repo.jpg",
    "revision": "084452a0ce1c4aaca96cd34cf79300fa"
  },
  {
    "url": "images/2019-recap/06hacktoberfest-swag.jpg",
    "revision": "8118796e089f94b742af582a6699d28f"
  },
  {
    "url": "images/2019-recap/07couple-codes.jpg",
    "revision": "bfcef8a333e07f49ff3fee8ae882fa6f"
  },
  {
    "url": "images/2019-recap/08tweet.jpg",
    "revision": "89327cecf75c9fe3c72482de6aeec510"
  },
  {
    "url": "images/2019-recap/2019-year-in-review-full.jpg",
    "revision": "96c518da80294565ffd86bfc7defe999"
  },
  {
    "url": "images/2019-recap/2019-year-in-review.jpg",
    "revision": "e087b3b9764900d3de43b82320cda361"
  },
  {
    "url": "images/3-podcasts-part-2/3-podcasts-sw-eng-part-02.jpg",
    "revision": "83ee1e30fe482a2e460c0ea360d946d6"
  },
  {
    "url": "images/3-podcasts-part-2/scale-your-code-podcast.jpg",
    "revision": "4b94fd2399d8e474c8ff27e69b67afc4"
  },
  {
    "url": "images/3-podcasts-part-2/scrum-master-toolbox-podcast.jpg",
    "revision": "5db5585422bb8d5086905dfc34f68008"
  },
  {
    "url": "images/3-podcasts-part-2/software-engineering-daily-podcast.jpg",
    "revision": "6f7f9307d8ed6a644b2bff1dc7c6fdb8"
  },
  {
    "url": "images/3-podcasts-part-3/3-podcasts-sw-eng-part-03.jpg",
    "revision": "126af2973ab048935f3bc6d80721741b"
  },
  {
    "url": "images/3-podcasts-part-3/mixergy.jpg",
    "revision": "ae87c622a5a669328951f65b42d4ec97"
  },
  {
    "url": "images/3-podcasts-part-3/tech-people.jpg",
    "revision": "cb950036651b29442efdf88280361fbe"
  },
  {
    "url": "images/3-podcasts-part-3/to-be-continuous.jpg",
    "revision": "1f963af417b23298082df928896488e8"
  },
  {
    "url": "images/3-podcasts-part-4/3-podcasts-sw-eng-part-04.jpg",
    "revision": "86158e92c942e04354b47d65d906ba5a"
  },
  {
    "url": "images/3-podcasts-part-4/agile-thoughts.jpg",
    "revision": "2f70d7f3cb73648e2f19fa6aa7b6f8b7"
  },
  {
    "url": "images/3-podcasts-part-4/developer-tea.jpg",
    "revision": "b3e33daf7c4176dacddfd3edad3a6181"
  },
  {
    "url": "images/3-podcasts-part-4/inside-intercom.jpg",
    "revision": "b85afbc35a5314f87077cd68fcf6168a"
  },
  {
    "url": "images/3-podcasts/3-podcasts-sw-eng.jpg",
    "revision": "cac7dd67dbf80ad1563b426c17b51d86"
  },
  {
    "url": "images/3-podcasts/fullstack-radio.png",
    "revision": "c55e2bf5c8255030549fe45d9b64259d"
  },
  {
    "url": "images/3-podcasts/startups-ftru.png",
    "revision": "a19b8bc5b3f12eb4a6508efe380bd9b2"
  },
  {
    "url": "images/3-podcasts/western-devs.png",
    "revision": "9994a030f36a83eb289eabe1bba0550f"
  },
  {
    "url": "images/3-rules-git-conflict/git-conflict.png",
    "revision": "93382e4d8aec82489df3510fbe743e1e"
  },
  {
    "url": "images/3-weeklies/3-weeklies-sw-eng.jpg",
    "revision": "417efe7402bbca76295f286ac8e0bea7"
  },
  {
    "url": "images/4-pillars-software-application/4-pillars-software-application.png",
    "revision": "278d746eb622df3651153e4fb53fe602"
  },
  {
    "url": "images/4-ways-docker/docker-whale.jpg",
    "revision": "d0a262c32e23668035f4367e9a048304"
  },
  {
    "url": "images/5-deployment-considerations/capistrano-deployment.png",
    "revision": "c611ac570b8623c37efbfa5a07f01f11"
  },
  {
    "url": "images/5-signs-agile-on-paper/agile-dog.jpg",
    "revision": "4202c95ef6da1bad6142f640ea76cd63"
  },
  {
    "url": "images/5-signs-agile-on-paper/board.jpg",
    "revision": "b10a4b9a0ef5826703be1a8a32c5bb96"
  },
  {
    "url": "images/5-signs-agile-on-paper/paper-boat.jpg",
    "revision": "815edf4a821f2029bd50fd73b46a4a82"
  },
  {
    "url": "images/5-signs-agile-on-paper/story.jpg",
    "revision": "948c9ccade891a83f8c62f167f5ba41a"
  },
  {
    "url": "images/5-steps-first-tech-job/first-tech-job-a.jpg",
    "revision": "696404fc6fad46996f860267e74190e1"
  },
  {
    "url": "images/5-steps-first-tech-job/first-tech-job-b.jpg",
    "revision": "298ae4886ddf08352fc3ba27c4d88d02"
  },
  {
    "url": "images/5-tech-medium-publications/library.jpg",
    "revision": "48c071ef3fafe633ebfc0a7f72c60bbb"
  },
  {
    "url": "images/a-b-to-150-ms/150-ms-geshan.jpg",
    "revision": "c1ca4a43fbfd4e029dc0206fdb7f433c"
  },
  {
    "url": "images/agile-software-development/01agile-software-development-apple.jpg",
    "revision": "ebbe11192cdcf5f83d1f2cb1d30854bc"
  },
  {
    "url": "images/agile-software-development/02agile-software-development-apple.jpg",
    "revision": "8f2353057c3744929b256f7414118fce"
  },
  {
    "url": "images/backend-vs-frontend/01person-screens.jpg",
    "revision": "b41a93e84eb49d7b5e2dc0a3c785a7a6"
  },
  {
    "url": "images/backend-vs-frontend/02backend-frontend.jpg",
    "revision": "cf8811aabf0b4e0beae813c147a389e4"
  },
  {
    "url": "images/better-tech-co/better-tech-co.jpg",
    "revision": "6ff1d037fa33ac5915509bf70cbdf9b9"
  },
  {
    "url": "images/bird_32_gray_fail.png",
    "revision": "79725f828a8112d54e8667e8894fa51d"
  },
  {
    "url": "images/bird_32_gray.png",
    "revision": "5b1297b7f38b861774131820a307aff8"
  },
  {
    "url": "images/career-paths-for-tech-grads/cptg-01.jpg",
    "revision": "47f676b213f29c5f94d812578ffbc95d"
  },
  {
    "url": "images/career-paths-for-tech-grads/cptg-02.jpg",
    "revision": "7199f84cc9ed35968e7202c02b3f6ae8"
  },
  {
    "url": "images/chatops/chatops-hubot.jpg",
    "revision": "32246ddadc8dac1b453e4b7381a8049f"
  },
  {
    "url": "images/chatops/chatops-talk.jpg",
    "revision": "f390ac5843f3e1445179cf476acf28be"
  },
  {
    "url": "images/chatops/codemodubai-speakers-day-1.jpg",
    "revision": "2bf31dca115edc94645b95c865144d72"
  },
  {
    "url": "images/chatops/speaker.jpg",
    "revision": "5fa90abb458c6e53da1c088b5ca7e0fd"
  },
  {
    "url": "images/cliffs_of_moher.jpg",
    "revision": "703beb2fc03b41d0e92461a6937476b5"
  },
  {
    "url": "images/code_bg.png",
    "revision": "5a2dad3b60b2b54394a2bf67dfb76970"
  },
  {
    "url": "images/continuous-delivery/geshan-devops--days-pdx-2017.jpg",
    "revision": "d894b6840fe6782708f37f5acb913a7a"
  },
  {
    "url": "images/db-migration/db-migration.png",
    "revision": "8a1de5c0a7aaa04b8949a31640c4d9ef"
  },
  {
    "url": "images/db-migration/schema-01.png",
    "revision": "a0d791d802562ac60d005bebe2f9db91"
  },
  {
    "url": "images/db-migration/schema-02.png",
    "revision": "72cec061f6434b51391207ba1c761535"
  },
  {
    "url": "images/db-migration/schema-03.png",
    "revision": "081f75f8502cfb5ad0af3fd1795d5792"
  },
  {
    "url": "images/debugging-node-js/00ndb.png",
    "revision": "be323b3451da5449c0627cd6be4057f2"
  },
  {
    "url": "images/debugging-node-js/01ndb-index.png",
    "revision": "4ff8b125e3c189f1eb89d6216d8e4231"
  },
  {
    "url": "images/debugging-node-js/02ndb-pause.png",
    "revision": "14ed55d7f6c7337a582954eedcc78e27"
  },
  {
    "url": "images/debugging-node-js/03ndb-continue.png",
    "revision": "b1370cf09130b03f6792954d918f1b07"
  },
  {
    "url": "images/debugging-node-js/04ndb-console.png",
    "revision": "05bd034f4db01f4ad98d1585a17f6dff"
  },
  {
    "url": "images/debugging-node-js/ladybug.jpg",
    "revision": "0dcc37812e8ccf2b088d94252ebef948"
  },
  {
    "url": "images/deployment-not-release/flags.jpg",
    "revision": "e318bd0b0e3d565b36acaf4ac44785f3"
  },
  {
    "url": "images/deployment-tools/fabric-deployment.png",
    "revision": "1a7974aca83c37cff167ef3cd1f60d61"
  },
  {
    "url": "images/do-it-in-sql/01result-without-group.png",
    "revision": "080b8b472e17da3de5a23a7058f77dbe"
  },
  {
    "url": "images/do-it-in-sql/02result-with-grouping.png",
    "revision": "e554e3c1de41e6fc986edd684c3796e6"
  },
  {
    "url": "images/do-it-in-sql/03result-group-concat.png",
    "revision": "3d114bf33fb5dcb01f8fb3ae8e00e49c"
  },
  {
    "url": "images/do-it-in-sql/04result-concat-ws.png",
    "revision": "d321fa340abf3e43ef122540de4a94f8"
  },
  {
    "url": "images/do-it-in-sql/05result-priority-formula.png",
    "revision": "5053632e99d26499c7d013bb52684df7"
  },
  {
    "url": "images/do-it-in-sql/refund-schema.png",
    "revision": "9b7f731af3d22ffbb06d5fa62e869206"
  },
  {
    "url": "images/do-it-in-sql/tea-lights.jpg",
    "revision": "543bf94806ef29648bbf001a081b28a5"
  },
  {
    "url": "images/docker-build-example/01faster-docker-build.jpg",
    "revision": "91bead08959fbc851a8e481b3035e89e"
  },
  {
    "url": "images/docker-build-example/02docker-build-bad-cache-no-buildkit.jpg",
    "revision": "2fbd79a73dc472de8bc46edb77faa455"
  },
  {
    "url": "images/docker-build-example/03docker-build-bad-cache-with-buildkit.jpg",
    "revision": "cf16223bb7994a25cfe8794aab23c45b"
  },
  {
    "url": "images/docker-build-example/04docker-build-good-cache-with-buildkit.jpg",
    "revision": "8c49fdf042290c9dd4ad065337f5a965"
  },
  {
    "url": "images/docker-build-example/05docker-build-good-cache-with-bk-code-change.jpg",
    "revision": "6777d2b39dc9b519969e782b6e72f002"
  },
  {
    "url": "images/docker-compose-vhost/docker-compose-vhost.jpg",
    "revision": "968a25519ed205c7b0b06419341ad725"
  },
  {
    "url": "images/docker-compose-vhost/page-visited.png",
    "revision": "6b9c854188440cdf10157af6d12d49e7"
  },
  {
    "url": "images/docker-multi-stage-builds/01original-docker-image.jpg",
    "revision": "b5bf3e645eaccfcc8e7795448a667cdf"
  },
  {
    "url": "images/docker-multi-stage-builds/02optimized-docker-image.jpg",
    "revision": "e7536ea24df03c9727e08afc1bf75be1"
  },
  {
    "url": "images/docker-multi-stage-builds/docker-msb-optimal-images-full.jpg",
    "revision": "be2d27977bbf4b2b9a0c8b7662883f8d"
  },
  {
    "url": "images/docker-multi-stage-builds/docker-msb-optimal-images.jpg",
    "revision": "c20328d61c01b82667aa76ad5d13ebfb"
  },
  {
    "url": "images/dotted-border.png",
    "revision": "f369510260055a1076789021328bcd93"
  },
  {
    "url": "images/email.png",
    "revision": "bb5f0b08ac2a9dfc83c698cda985da59"
  },
  {
    "url": "images/express-helmet/01express-helmet-full.jpg",
    "revision": "d37cb542f0f315c09a1b068ce9d7a072"
  },
  {
    "url": "images/express-helmet/01express-helmet.jpg",
    "revision": "cdf73a60f7be261ac34c0d30e0622b9b"
  },
  {
    "url": "images/express-helmet/02express-without-helmet.jpg",
    "revision": "d4c946d98757ce2b908bff9481199c0a"
  },
  {
    "url": "images/express-helmet/03express-with-helmet.jpg",
    "revision": "b804e6d30db4c5e08c7f3be77006670b"
  },
  {
    "url": "images/express-helmet/04express-before-helmet.jpg",
    "revision": "198288979b457b8de045f6a72af37118"
  },
  {
    "url": "images/express-helmet/05express-after-helmet.jpg",
    "revision": "828f09de84fcd1126f6d957d1185dd20"
  },
  {
    "url": "images/favicons/android-chrome-192x192.png",
    "revision": "9c9d742febe2ba11781f5e37263236ad"
  },
  {
    "url": "images/favicons/android-chrome-512x512.png",
    "revision": "23663ffa2582cb44ccd31386d91315f8"
  },
  {
    "url": "images/favicons/apple-touch-icon.png",
    "revision": "d4f484fae1516f1b6064a03405d0c72a"
  },
  {
    "url": "images/favicons/favicon-16x16.png",
    "revision": "284d03397fb75060f70683bf965cbb08"
  },
  {
    "url": "images/favicons/favicon-32x32.png",
    "revision": "f66674aa38ebb3fc97796c7d24baf4d1"
  },
  {
    "url": "images/favicons/favicon.ico",
    "revision": "b62cbd85d34d10f735098ffadb7504c7"
  },
  {
    "url": "images/feature-switch/feature-switch.jpg",
    "revision": "52e3e24c89e9bd36354fe698a222517f"
  },
  {
    "url": "images/free-nodejs-hosting/01free-nodejs-hosting-full.jpg",
    "revision": "bb47494f4ff4c8119268313322d5e7c9"
  },
  {
    "url": "images/free-nodejs-hosting/01free-nodejs-hosting.jpg",
    "revision": "24a3042891b5af30a5697146827e556a"
  },
  {
    "url": "images/free-nodejs-hosting/02nodejs-heroku.jpg",
    "revision": "7748b94bf5eef3250bd5a19107e6122b"
  },
  {
    "url": "images/free-nodejs-hosting/03nodejs-app-on-heroku.jpg",
    "revision": "d341be4cc84915858f8cc4a881159d66"
  },
  {
    "url": "images/free-nodejs-hosting/04nodejs-quotes-api-on-heroku.jpg",
    "revision": "ecc056fb383738bd32d66f6dc66f4a12"
  },
  {
    "url": "images/free-nodejs-hosting/05nodejs-vercel-linkup.jpg",
    "revision": "f2c66cb3cf0a8bf056421e793eeb258e"
  },
  {
    "url": "images/free-nodejs-hosting/06nodejs-vercel-create-repo.jpg",
    "revision": "084da38ae528c8f2add003356124652d"
  },
  {
    "url": "images/free-nodejs-hosting/07nodejs-vercel-project-root.jpg",
    "revision": "3820eae1fe569ef96cbda22d2c7fb4b3"
  },
  {
    "url": "images/free-nodejs-hosting/08nodejs-vercel-deploy.jpg",
    "revision": "8f4f81986c47cc1eb1e6d4de63ecca69"
  },
  {
    "url": "images/free-nodejs-hosting/09nodejs-vercel-deployed.jpg",
    "revision": "4e9c9b4e0696f6f6cc004677a974f43a"
  },
  {
    "url": "images/free-nodejs-hosting/10nodejs-vercel-app-running.jpg",
    "revision": "cf6e92b63a4e70296c61aceaffd6dde6"
  },
  {
    "url": "images/free-nodejs-hosting/11nodejs-vercel-api-running.jpg",
    "revision": "bbdf05aead0e73a8e7a6f28aab02b62e"
  },
  {
    "url": "images/free-nodejs-hosting/12nodejs-vercel-deploy-preview.jpg",
    "revision": "3d0321073eb921106e7946b2f559e9b1"
  },
  {
    "url": "images/free-nodejs-hosting/13nodejs-zeet-deploy-now.jpg",
    "revision": "c7d651e61084189aac5568a00fb427d8"
  },
  {
    "url": "images/free-nodejs-hosting/14nodejs-zeet-commands.jpg",
    "revision": "6cf8ec5724a4d9f1dcad86183b3d97d1"
  },
  {
    "url": "images/free-nodejs-hosting/15nodejs-zeet-deployed.jpg",
    "revision": "b4f305d031fb19c7c131aac6cb318813"
  },
  {
    "url": "images/free-nodejs-hosting/16nodejs-zeet-port.jpg",
    "revision": "754267ea9357885a9b722aac347dc789"
  },
  {
    "url": "images/free-nodejs-hosting/17nodejs-zeet-app-running.jpg",
    "revision": "28147e2ee5e275564a7a5177be96ad1f"
  },
  {
    "url": "images/free-nodejs-hosting/18nodejs-zeet-api-running.jpg",
    "revision": "f1b0f90752ea85decabf290258ff8961"
  },
  {
    "url": "images/free-nodejs-hosting/19nodejs-zeet-deploy-preview.jpg",
    "revision": "3cae87b19ad0867118d6feed18656478"
  },
  {
    "url": "images/free-non-profit-services/non-profit.jpg",
    "revision": "742975d46abae884684b5fb145c88125"
  },
  {
    "url": "images/free-productivity-software/01productivity.jpg",
    "revision": "d52dd61da6341d27f5e00d45462d5d76"
  },
  {
    "url": "images/free-productivity-software/02toggl-track.jpg",
    "revision": "a79b18d54cf740e57245a4f69f89a6f4"
  },
  {
    "url": "images/free-productivity-software/03world-time-buddy.jpg",
    "revision": "dbf8d58c06b811c57a4589c587957cbd"
  },
  {
    "url": "images/free-productivity-software/04calendly.jpg",
    "revision": "841203fff1a2071eeb17e173ff196937"
  },
  {
    "url": "images/free-productivity-software/05miro.jpg",
    "revision": "566b6b2d2ece49970bd2cf4af4d7545e"
  },
  {
    "url": "images/free-productivity-software/06ilovepdf.jpg",
    "revision": "b4055020a9e4325b26a15a90aa82529d"
  },
  {
    "url": "images/free-site-services/conspire.jpg",
    "revision": "d28663b4298895bb61fcd079502c8546"
  },
  {
    "url": "images/free-site-services/free-site-services.jpg",
    "revision": "b59336b003fde057c9da906680aaf851"
  },
  {
    "url": "images/free-site-services/freeboard.jpg",
    "revision": "ae69569fbb4f5a2fd832fca118bc2e7f"
  },
  {
    "url": "images/free-site-services/ga-visually.jpg",
    "revision": "3248f7eb249e681cf8aa2358c4ad4e1d"
  },
  {
    "url": "images/free-site-services/uptime-robot.jpg",
    "revision": "48c61fc728d97e4cacf4515396b5ebeb"
  },
  {
    "url": "images/generic/blog.jpg",
    "revision": "c2925b11fb83c843ab87f98fdc300b49"
  },
  {
    "url": "images/generic/loading-big.gif",
    "revision": "0d5146f0c13d24898759b85d2e5daf50"
  },
  {
    "url": "images/generic/loading.gif",
    "revision": "2eb1bc05824f272c28fa1bc8361f7fb7"
  },
  {
    "url": "images/geshan.jpg",
    "revision": "15c7eaf820b9cddce4c3048876172f87"
  },
  {
    "url": "images/gravatar.jpg",
    "revision": "53598c7ff2c5f69ca9349ee6caa8f388"
  },
  {
    "url": "images/internal-vs-customer-facing-apps/01ecommerce.jpg",
    "revision": "4d14584a19a6521e034a93edba443ef0"
  },
  {
    "url": "images/internal-vs-customer-facing-apps/02ecommerce.jpg",
    "revision": "70e380d1396ce0d4b956e6ad7ad96b60"
  },
  {
    "url": "images/jamstack-tutorial/00jamstack-tutorial.jpg",
    "revision": "938320b6a2889e090841a0e54972ca80"
  },
  {
    "url": "images/jamstack-tutorial/01register-on-github.jpg",
    "revision": "3f4889f5147a0ef3eb92c20ea254a13e"
  },
  {
    "url": "images/jamstack-tutorial/02complete-steup-github.jpg",
    "revision": "88393eb7358a28f1c566e8a973df2d87"
  },
  {
    "url": "images/jamstack-tutorial/03verify-email-github.jpg",
    "revision": "ce21ea920f6572fc7efe86b51c838793"
  },
  {
    "url": "images/jamstack-tutorial/04email-verified-github.jpg",
    "revision": "4225015e5051adbb7840fe22c9006a15"
  },
  {
    "url": "images/jamstack-tutorial/05github-profile.jpg",
    "revision": "e1f564a15642c700f1c4fb45ffc6cff3"
  },
  {
    "url": "images/jamstack-tutorial/06register-on-netlify.jpg",
    "revision": "f40870d9f9ea2d674e67060ecccde4d3"
  },
  {
    "url": "images/jamstack-tutorial/07register-on-nelify-with-github.jpg",
    "revision": "3be33baad7861d925bd403832fad445e"
  },
  {
    "url": "images/jamstack-tutorial/08nelify-registration-done.jpg",
    "revision": "2e22764a93efea39b59aa62ef55b6b04"
  },
  {
    "url": "images/jamstack-tutorial/09register-on-forestry.jpg",
    "revision": "d28a78534a648a6eb247fdf2a1e6a656"
  },
  {
    "url": "images/jamstack-tutorial/10register-on-forrestry-with-github.jpg",
    "revision": "996e1144265c31ec27ea0b6b3b2de338"
  },
  {
    "url": "images/jamstack-tutorial/11forestry-registration-success.jpg",
    "revision": "ff510f89994825df99925fa6da5c958c"
  },
  {
    "url": "images/jamstack-tutorial/12stackbit-registration.jpg",
    "revision": "eec1b1ac3f30927a16b215fd36f87482"
  },
  {
    "url": "images/jamstack-tutorial/13stackbit-register-with-github.jpg",
    "revision": "c52e4ea6d7e89ffd4401d6e8485d6f39"
  },
  {
    "url": "images/jamstack-tutorial/14stackbit-registered.jpg",
    "revision": "36711b2adbd70e55b0f133cd657dd8d5"
  },
  {
    "url": "images/jamstack-tutorial/15stackbit-new-project-start.jpg",
    "revision": "061c95c6d1f9a023ad0df09b1adac525"
  },
  {
    "url": "images/jamstack-tutorial/16stackbit-choose-fresh-theme.jpg",
    "revision": "63249123064d05f38f87516d13e3edda"
  },
  {
    "url": "images/jamstack-tutorial/17stackbit-choose-hugo-ssg.jpg",
    "revision": "c4519c7d3bfdcc421a1a1a6b3ebb4ab0"
  },
  {
    "url": "images/jamstack-tutorial/18stackbit-choose-forestry-cms.jpg",
    "revision": "49a04e6121719016ac2d0ef9430cd1bc"
  },
  {
    "url": "images/jamstack-tutorial/19stackbit-name-project.jpg",
    "revision": "6806c87b18a129f44bbcf3c8a6547240"
  },
  {
    "url": "images/jamstack-tutorial/20stackbit-forestry-connect.jpg",
    "revision": "54304843bf99e111c20f5e8ba29bb7f5"
  },
  {
    "url": "images/jamstack-tutorial/21stackbit-forestry-connected.jpg",
    "revision": "c6b0fd85a59205dbc7196113e8a0f364"
  },
  {
    "url": "images/jamstack-tutorial/22stackbit-github-connect.jpg",
    "revision": "1527faf5a2d2b79e18113564cfe8dbf2"
  },
  {
    "url": "images/jamstack-tutorial/23stackbit-both-connected.jpg",
    "revision": "6189b7a3528c9a8421e299cfb71ab4fb"
  },
  {
    "url": "images/jamstack-tutorial/24stackbit-deploying-fresh.jpg",
    "revision": "f27a37bfcb6f3a93070ef62f70d42c0b"
  },
  {
    "url": "images/jamstack-tutorial/25stackbit-deployed-fresh.jpg",
    "revision": "c3a3f57c323bf8937b4183f479b94152"
  },
  {
    "url": "images/jamstack-tutorial/26stackbit-netlify-claim.jpg",
    "revision": "fb7b2c137c7566be21df3ccdbfd55a90"
  },
  {
    "url": "images/jamstack-tutorial/27stackbit-netlify-success.jpg",
    "revision": "184a123b9dcac92d921602beb7f2834e"
  },
  {
    "url": "images/jamstack-tutorial/28fresh-working.jpg",
    "revision": "0387c89536c55c462d7a8317e2bb21e5"
  },
  {
    "url": "images/jamstack-tutorial/29forestry-dashboard.jpg",
    "revision": "496281837be738b07b009a0cec859169"
  },
  {
    "url": "images/jamstack-tutorial/30forestry-home-edit.jpg",
    "revision": "1de658fd58be32cd763053bf53aeda36"
  },
  {
    "url": "images/jamstack-tutorial/31forestry-home-hero-edit.jpg",
    "revision": "7505b5c22d341bde368a0cc7e4be27a3"
  },
  {
    "url": "images/jamstack-tutorial/32site-deploying.jpg",
    "revision": "9499938243dbe2c1149d2ea75808ef95"
  },
  {
    "url": "images/jamstack-tutorial/33site-deployed.jpg",
    "revision": "390e881d701de743a4e4eb34ed7f3d24"
  },
  {
    "url": "images/jamstack-tutorial/34site-content-changed.jpg",
    "revision": "cda09d4ab84c74f3c900bc1f28daa57f"
  },
  {
    "url": "images/javascript-array-functions/01javascript-array-functions-full.jpg",
    "revision": "7eb9adef3a739dfdc3bc8a30483323f2"
  },
  {
    "url": "images/javascript-array-functions/01javascript-array-functions.jpg",
    "revision": "fa9824cf9f9010569785773347cd3610"
  },
  {
    "url": "images/javascript-memoization/01javascript-memoization-full.jpg",
    "revision": "d975529d970a9f5c0060ea732b2893da"
  },
  {
    "url": "images/javascript-memoization/01javascript-memoization.jpg",
    "revision": "a233f69564de30515451344249403e46"
  },
  {
    "url": "images/javascript-memoization/02before-javascript-memoization.jpg",
    "revision": "354aae9798d4fb27f37dcbc161004957"
  },
  {
    "url": "images/javascript-memoization/03after-javascript-memoization.jpg",
    "revision": "15f9ba71074d3d00444b8c10dbcc39a7"
  },
  {
    "url": "images/javascript-memoization/04logs-after-javascript-memoization.jpg",
    "revision": "cf3379b0f4a77c1980b72a7fc5959e24"
  },
  {
    "url": "images/kubernetes-cron-job/01kubernetes-cron-job-full.jpg",
    "revision": "e97b613257c744990990dd349f176765"
  },
  {
    "url": "images/kubernetes-cron-job/01kubernetes-cron-job.jpg",
    "revision": "01e2c5908be67c1587e09f1c008226a3"
  },
  {
    "url": "images/kubernetes-cron-job/02kubernetes-cron-job-popularity.jpg",
    "revision": "4fa34c1e833b70de9d29972c53a2c80e"
  },
  {
    "url": "images/kubernetes-cron-job/03kubernetes-cron-job-simple.jpg",
    "revision": "739a91f224538bf673ff4b75a1ed83e6"
  },
  {
    "url": "images/kubernetes-cron-job/04kubernetes-cron-job-better.jpg",
    "revision": "ccf6e09dd761accad61f334fc3e4fa49"
  },
  {
    "url": "images/kubernetes-cron-job/05kubernetes-cron-job-create-job.jpg",
    "revision": "15ea9c0e8a2a345af6e2fde2883c4b9b"
  },
  {
    "url": "images/language-framework-learn/cycle.jpg",
    "revision": "9446a50acf81e2114545cf39b063b4eb"
  },
  {
    "url": "images/language-framework-learn/lang-framework-learn.jpg",
    "revision": "21c55bb99621f58019152f2b645e91a8"
  },
  {
    "url": "images/laracon-au-2019/01-laracon-au-2019.jpg",
    "revision": "d7033074fda6105f4d728fe2e39e7bc6"
  },
  {
    "url": "images/laracon-au-2019/02-laracon-au-2019.jpg",
    "revision": "bbd3466f6cda162c33c09c0ec870c717"
  },
  {
    "url": "images/laracon-eu-2016/adam-laracon-eu.jpg",
    "revision": "3796aa025dc9253ade21a7a2d397feaa"
  },
  {
    "url": "images/laracon-eu-2016/geshan-laracon-eu.jpg",
    "revision": "f0f019b6e8508f1c7f154e4d3c867f12"
  },
  {
    "url": "images/laracon-eu-2016/laracon-eu.jpg",
    "revision": "bf70b5559deffd3ddffb686e1628d3ae"
  },
  {
    "url": "images/laracon-eu-2016/speaker-dinner.jpg",
    "revision": "a0710e0096c9e8e79ff818078c49e46a"
  },
  {
    "url": "images/laracon-eu-2016/taylor-laracon-eu.jpg",
    "revision": "7c3870b94a72af349be6df3ed962f3db"
  },
  {
    "url": "images/laravel-mysql-docker/docker-compose-stop.png",
    "revision": "5b7696d3b96b7e34f0389462dd28fdfb"
  },
  {
    "url": "images/laravel-mysql-docker/docker-compose-up.png",
    "revision": "778fe3b30c45fed8dbb5c14701eb4f8e"
  },
  {
    "url": "images/laravel-mysql-docker/folder-structure.png",
    "revision": "0e2a2d3b4bbf7a1a54cae0d6b17fc325"
  },
  {
    "url": "images/laravel-mysql-docker/laravel-mysql-docker.png",
    "revision": "2ddd43588ef5237f255d87b68857cdbb"
  },
  {
    "url": "images/laravel-mysql-docker/users-table.png",
    "revision": "45695cab44714d7989abadb921331c22"
  },
  {
    "url": "images/laravel-unit-tests/laravel-popularity.png",
    "revision": "3cfb34d6254424dd3aaf994a641bbd6d"
  },
  {
    "url": "images/laravel-unit-tests/laravel-testing-doc.png",
    "revision": "192cb3dd8d805c86786afb720b0ee9be"
  },
  {
    "url": "images/laravel-unit-tests/laravel-unit-test-structure.png",
    "revision": "1e6bee03225e58a3874f7b797e0f24af"
  },
  {
    "url": "images/laravel-unit-tests/laravel-unit-tests.png",
    "revision": "3e531be159b3d4171827128d9be94334"
  },
  {
    "url": "images/laravel-unit-tests/running-laravel-app.png",
    "revision": "d6a3cc51d8fd7bfbf7324f6c4d2ee5b7"
  },
  {
    "url": "images/laravel-unit-tests/tests-green-gulp.png",
    "revision": "ac9adfbb1316cb43dd0401b6aa7f6e65"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/00laravel6-on-gcr.jpg",
    "revision": "4f5bf5db199cde0a7595f4289092acf7"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/00laravel6-on-google-cloud-r.jpg",
    "revision": "65a9e252df641206b6a7baf914549a8e"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/01install-laravel.jpg",
    "revision": "a6cfdb9e82c203289792fdf6944b2ee3"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/02running-laravel.jpg",
    "revision": "f7cbe9c2432ea36f625b1486c479f195"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/03github-repo.jpg",
    "revision": "778a9a41cf727f4862d3cb98e3c26fbe"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/04initial-push.jpg",
    "revision": "0feef57bda7ca81a42ff8eb42c5a7e3e"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/05github-actions.jpg",
    "revision": "d42f47b50c8a9f744f394af7c55bb08f"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/06gh-actions-ci.jpg",
    "revision": "0af9d1531956e3e3205e88bc11b93b4f"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/07docker-compose-output.jpg",
    "revision": "1db80699ce0abb682edcb6ea5e38112c"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/08test-running-gh.jpg",
    "revision": "45a43787a4d47d9369c10e8e1c6f1f40"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/09cloud-run-button.jpg",
    "revision": "58a99b6ed2f6c92589d01ed63ab9cba3"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/10laravel-running-gcr.jpg",
    "revision": "e62c9d8cf616be300a3127c677d6ae12"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/11laravel-url.jpg",
    "revision": "ea0429292da1730b6d38cf339be7d702"
  },
  {
    "url": "images/laravel6-on-google-cloud-run/laravel6-on-gcr-f.jpg",
    "revision": "44f64734a662b2a73e8ea03186d26a70"
  },
  {
    "url": "images/life-changing-startup/01autechjobs-app.jpg",
    "revision": "64014a04bf952e0572afb53fe448283a"
  },
  {
    "url": "images/life-changing-startup/02autechjobs-site.jpg",
    "revision": "92f489f88d6b849793b976fb37ddf675"
  },
  {
    "url": "images/life-changing-startup/03timeline.jpg",
    "revision": "93d262ac9167544ce2354252c2b38f40"
  },
  {
    "url": "images/line-tile.png",
    "revision": "297285d4f4db123313e78ecc6e476d18"
  },
  {
    "url": "images/logging-best-practices/logging-bp.jpg",
    "revision": "3c8b460c96e0ff7c393c126e4e26265c"
  },
  {
    "url": "images/logging-importance/logentries.png",
    "revision": "6d7e0dac054e3a58f4da5dae89558194"
  },
  {
    "url": "images/logging-importance/logging-code.png",
    "revision": "9042d005a82a692e599531c17cefd2d0"
  },
  {
    "url": "images/matrix.png",
    "revision": "613cc67b07b52cc176c72174332828a7"
  },
  {
    "url": "images/microservice-code/baggage.jpg",
    "revision": "2a23606a71c3c905d324d1fe9adbf8cb"
  },
  {
    "url": "images/microservice-code/lego.jpg",
    "revision": "4ad9d596443ef43d03dbdcf31e73b94d"
  },
  {
    "url": "images/microservice-code/pot-on-head.jpg",
    "revision": "45bda8d9d509d6f509d952a2acb03442"
  },
  {
    "url": "images/monitor-crons/monitor-crons.jpg",
    "revision": "1464cb24c08b6fac55b11c7cecdc702e"
  },
  {
    "url": "images/nodejs-docker-docker-compose/00nodejs-docker-docker-compose-full.jpg",
    "revision": "2a25c2eb417107d7ea82b48bdeed7f2f"
  },
  {
    "url": "images/nodejs-docker-docker-compose/00nodejs-docker-docker-compose.jpg",
    "revision": "7fb9d3b98a71373678bd627a04a62326"
  },
  {
    "url": "images/nodejs-docker-docker-compose/01setup-nodejs-express-with-generator.jpg",
    "revision": "8bb9da45d5444c8a5d9502dfadf47c70"
  },
  {
    "url": "images/nodejs-docker-docker-compose/02run-express.jpg",
    "revision": "ffaabadd99abcaf79a9b2d2028e419bd"
  },
  {
    "url": "images/nodejs-docker-docker-compose/03express-output.jpg",
    "revision": "dffde57691d7d3cb061af4a9da35bd98"
  },
  {
    "url": "images/nodejs-docker-docker-compose/04nodejs-code-changes.jpg",
    "revision": "3f583041ec27e19b684dc9a92fe17730"
  },
  {
    "url": "images/nodejs-docker-docker-compose/05express-output-changes.jpg",
    "revision": "67c66a7126d08aa5a2eaf7ac845d7a00"
  },
  {
    "url": "images/nodejs-docker-docker-compose/06run-express-with-nodemon.jpg",
    "revision": "549ba554336f07912ec8e22fcb60919f"
  },
  {
    "url": "images/nodejs-docker-docker-compose/07docker-build-with-biuildkit.jpg",
    "revision": "dcb72b28c532c92e2544b5537d64b14e"
  },
  {
    "url": "images/nodejs-docker-docker-compose/08docker-run-simple.jpg",
    "revision": "90f3957cd365dc5a47b4b353773fc0c8"
  },
  {
    "url": "images/nodejs-docker-docker-compose/09docker-run-multi-stage.jpg",
    "revision": "49481ca8a60dccd3dfccd376663f642e"
  },
  {
    "url": "images/nodejs-docker-docker-compose/10nodejs-docker-compose-build.jpg",
    "revision": "209fbf26ced6eb0418caadd48bad6a25"
  },
  {
    "url": "images/nodejs-docker-docker-compose/11nodejs-docker-compose-up.jpg",
    "revision": "90ba7c30df0b8ebbd2cfe06d6d652ddf"
  },
  {
    "url": "images/nodejs-express-tutorial/01nodejs-express-tutorial-full.jpg",
    "revision": "74b381f37eed86f4a8d08e9097c0be2e"
  },
  {
    "url": "images/nodejs-express-tutorial/01nodejs-express-tutorial.jpg",
    "revision": "32f06100bc6820ed4c69c4cfd1f1cd3b"
  },
  {
    "url": "images/nodejs-express-tutorial/02eventually-podcast.jpg",
    "revision": "2bd8716aef096447175c4f755ddca2f7"
  },
  {
    "url": "images/nodejs-express-tutorial/03npm-init-y.jpg",
    "revision": "b421921b9be8b3de0965765d89ca589a"
  },
  {
    "url": "images/nodejs-express-tutorial/04assets-structure.jpg",
    "revision": "89cc2b42a979ed585347eac5a9ee5d2d"
  },
  {
    "url": "images/nodejs-express-tutorial/05project-structure.jpg",
    "revision": "7d224a8aaac75b69507e884648037c9d"
  },
  {
    "url": "images/nodejs-express-tutorial/06npm-start.jpg",
    "revision": "1e636e04b23d92dceb873b97c35b8027"
  },
  {
    "url": "images/nodejs-express-tutorial/07express-pug-running.jpg",
    "revision": "6a025393e1270a7c1e7ec99d892adb14"
  },
  {
    "url": "images/nodejs-for-php-developers/01nodejs-for-php-developers-full.jpg",
    "revision": "3285a61dd6560caea8b73846ba77832c"
  },
  {
    "url": "images/nodejs-for-php-developers/01nodejs-for-php-developers.jpg",
    "revision": "c95f81fad4f5b492c1b90ba2a238b589"
  },
  {
    "url": "images/nodejs-for-php-developers/02node-10-to-14.jpg",
    "revision": "20290ff847b6559901b342cbdb9a7f8a"
  },
  {
    "url": "images/nodejs-http-requests/01nodejs-http-requests.jpg",
    "revision": "fd2f2cab939c0eba3edd354b98545320"
  },
  {
    "url": "images/nodejs-http-requests/02nodejs-code-output.jpg",
    "revision": "d6d9220a1018c4f678fa5dac898e5c84"
  },
  {
    "url": "images/nodejs-http-requests/03npm-trends.jpg",
    "revision": "b50198d7791e9bac710aac877feadb0c"
  },
  {
    "url": "images/nodejs-logging-libraries/01nodejs-logging-library-full.jpg",
    "revision": "53fb964880b17d95159e4f56a1b759a8"
  },
  {
    "url": "images/nodejs-logging-libraries/01nodejs-logging-library.jpg",
    "revision": "a39da7227653d26f629da4a933d0d34e"
  },
  {
    "url": "images/nodejs-logging-libraries/02nodejs-logging-libraries-downloads.jpg",
    "revision": "77205c3f98a79221d5df65be23b3c1db"
  },
  {
    "url": "images/nodejs-microservices/01nodejs-microservices.jpg",
    "revision": "71b3ec6215cc6edc3b9ae351d2f33842"
  },
  {
    "url": "images/nodejs-microservices/02nodejs-microservices-big.jpg",
    "revision": "1ee3957ec37c7e4c47f9101d69891d3f"
  },
  {
    "url": "images/nodejs-mysql-tutorial/00nodejs-mysql-tutorial-full.jpg",
    "revision": "7533b1655f6f4346a76f5a06cd80599b"
  },
  {
    "url": "images/nodejs-mysql-tutorial/00nodejs-mysql-tutorial.jpg",
    "revision": "3f7a8c4229e1ca672ccfdf5dbdca973c"
  },
  {
    "url": "images/nodejs-mysql-tutorial/01express-generator-output.jpg",
    "revision": "1c3991321972e2f6d638297e21007452"
  },
  {
    "url": "images/nodejs-mysql-tutorial/02express-running.jpg",
    "revision": "b2ebbaf35cac73e68ac52e4323d03c2f"
  },
  {
    "url": "images/nodejs-mysql-tutorial/03quotes-static-output.jpg",
    "revision": "eb60f72a72a6d41628fc9376ffc88a04"
  },
  {
    "url": "images/nodejs-mysql-tutorial/04quotes-dynamic-output.jpg",
    "revision": "be0f1995e3dbb63174bf12e636bb015f"
  },
  {
    "url": "images/nodejs-mysql-tutorial/05nodemon-output.jpg",
    "revision": "cd98e7ebc03974b7ac473a793ad35a21"
  },
  {
    "url": "images/nodejs-mysql-tutorial/06pagination-output.jpg",
    "revision": "0b009fb0d214206021ff2236905c6978"
  },
  {
    "url": "images/nodejs-mysql-tutorial/07curl-output.jpg",
    "revision": "281bf6687e0bf9e6ca5c2e767e62b2e7"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/01nodejs-postgres-tutorial-full.jpg",
    "revision": "999befa73d2d377151df791da18f0a97"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/01nodejs-postgres-tutorial.jpg",
    "revision": "b1bc69a059ede4ccd803ff039a5f2ad7"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/02express.jpg",
    "revision": "5c1c92dbe01a7fc3ce5afe45e79a0cd3"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/03quotes-static.jpg",
    "revision": "229ba897c1eb80320eba59925c642b58"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/04create-table-elephant-sql.jpg",
    "revision": "bc04877bbaaf4473d86acb68635fc149"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/05select-elephant-sql.jpg",
    "revision": "7f36e3393880e5a5c13aa24f281ec7e7"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/06quotes-api-page-2.jpg",
    "revision": "24cac22a0aa91fdaeddc1a3c4b80d2c9"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/07validation-working.jpg",
    "revision": "afdd7a028a3fde59f3d94e0d14662c20"
  },
  {
    "url": "images/nodejs-postgresql-tutorial/08quotes-page-1.jpg",
    "revision": "b8d54284688cae4eac7dfc75369e9444"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/01nodejs-read-file-line-by-line-full.jpg",
    "revision": "5f2716df40e6fb3d708d13f5c709131f"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/01nodejs-read-file-line-by-line.jpg",
    "revision": "54267b4eb70587b8092932bc2ed8f62a"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/02readfilesync.jpg",
    "revision": "ade8a3754f1f537760be10b85fa3349d"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/03readline.jpg",
    "revision": "9dac619a77097c57ed8d12e868fd2a75"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/04n-readlines.jpg",
    "revision": "f047b802d2a9e0e1b1afc6a2680bdc88"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/05line-reader.jpg",
    "revision": "98d2d8f558ab37119ca98b87d09ee30e"
  },
  {
    "url": "images/nodejs-read-file-line-by-line/06npm-trends-compare.jpg",
    "revision": "105873c9d76eeb8805e8bb400bfb4109"
  },
  {
    "url": "images/nodejs-redis/01nodejs-redis-full.jpg",
    "revision": "fb2e2fdc753d691a09f61dee624b35e1"
  },
  {
    "url": "images/nodejs-redis/01nodejs-redis.jpg",
    "revision": "46b05b2ccfeb317101aef8b827156263"
  },
  {
    "url": "images/nodejs-redis/02redis-lab-settings.jpg",
    "revision": "e5eee97091edc9a9192ddf3e5de5a4ca"
  },
  {
    "url": "images/nodejs-redis/03nodejs-redis-before-cache.jpg",
    "revision": "b972b1976dbae1ee5615e2e25a64e7f8"
  },
  {
    "url": "images/nodejs-redis/04nodejs-redis-after-cache.jpg",
    "revision": "6b5ccedaedca1334b53c48a6043a1820"
  },
  {
    "url": "images/nodejs-sqlite/01nodejs-sqlite-full.jpg",
    "revision": "e33fda2b513e35364faee0b77a3f8c77"
  },
  {
    "url": "images/nodejs-sqlite/01nodejs-sqlite.jpg",
    "revision": "09e43f421a0cb90d4a2b911abbd34c35"
  },
  {
    "url": "images/nodejs-sqlite/02sqlite-cli.jpg",
    "revision": "1e5e6361f7b2d6b30b8b0b41e8e1199f"
  },
  {
    "url": "images/nodejs-sqlite/03quotes-on-sqlite.jpg",
    "revision": "7943211bee73c699b65d74a2b068922c"
  },
  {
    "url": "images/nodejs-sqlite/04nodejs-sqlite-get-quotes.jpg",
    "revision": "cd1e7af20cb54a0525f882b619d06f5a"
  },
  {
    "url": "images/nodejs-web-scraping/01nodejs-web-scraping-full.jpg",
    "revision": "26e126ce3d9ffa0abd86e3fb76f74048"
  },
  {
    "url": "images/nodejs-web-scraping/01nodejs-web-scraping.jpg",
    "revision": "772d39896ff67e3ee22b7fce67a75a6f"
  },
  {
    "url": "images/nodejs-web-scraping/02nodejs-web-scraping-browser.jpg",
    "revision": "acd51cbe243d0f39eb00b65d41136749"
  },
  {
    "url": "images/nodejs-web-scraping/03nodejs-web-scraping-dollor.jpg",
    "revision": "a0dc2c696f13bf87eccf2d6fb7e75638"
  },
  {
    "url": "images/nodejs-web-scraping/04axios-cheerio-domain.jpg",
    "revision": "e7d9324608465659d72a00d6cf739ad0"
  },
  {
    "url": "images/nodejs-web-scraping/05puppeteer-workable.jpg",
    "revision": "47b7743f1b9d695ea2e9d5be5f5fa846"
  },
  {
    "url": "images/nodemon/01nodemon-full.jpg",
    "revision": "cdbe57b77a14a9bc2c8ca8be942fc2d4"
  },
  {
    "url": "images/nodemon/01nodemon.jpg",
    "revision": "3eece812c2c78ad8d86b94b93ad8d57a"
  },
  {
    "url": "images/nodemon/02nodemon-install-local.jpg",
    "revision": "62c59c17de27d6edcfa296de30b1162b"
  },
  {
    "url": "images/nodemon/03nodemon-run.jpg",
    "revision": "bc23931e340d5e466930f11b5e37387e"
  },
  {
    "url": "images/noise.png",
    "revision": "be1894b842920fd347e10d16acb00dee"
  },
  {
    "url": "images/pair-programming-benefits/01pair-programming-benefits-full.jpg",
    "revision": "8bad8b4e5d47d15caa13c5e182bf4ec9"
  },
  {
    "url": "images/pair-programming-benefits/01pair-programming-benefits.jpg",
    "revision": "3f5b8c1dbba1de7b8e8753874523b37b"
  },
  {
    "url": "images/php-dev-meetup-16/php-dev-meetup-16.jpg",
    "revision": "56811a0fa91a1d20ab97629e841915fb"
  },
  {
    "url": "images/php-dev-meetup-16/simplified-gitflow-talk.jpg",
    "revision": "244441b775b4a76ba68feb3be1fc40e8"
  },
  {
    "url": "images/php-oss-checklist/example-foss.png",
    "revision": "2f772a0cbdbc821f10657e2330af9994"
  },
  {
    "url": "images/php-oss-checklist/huBoard.png",
    "revision": "881375cc2a6096ae5a600a6b108884c9"
  },
  {
    "url": "images/phpunit-assertions/01phpunit-assertions-full.jpg",
    "revision": "dfc5bbb403fbe853ebe6fe8691415833"
  },
  {
    "url": "images/phpunit-assertions/01phpunit-assertions.jpg",
    "revision": "94ab806606a42e3388261a13eb3aad7d"
  },
  {
    "url": "images/phpunit-assertions/02phpunit-assertions-count-small.jpg",
    "revision": "4e815a83b9b5097078b9a578043b8b8a"
  },
  {
    "url": "images/phpunit-assertions/03phpunit-assertions-count-medium.jpg",
    "revision": "9bc2c82d427544664e4781af33da1c30"
  },
  {
    "url": "images/phpunit-assertions/04phpunit-assertions-count-large.jpg",
    "revision": "dd5404ed779858ac75e830e57be27528"
  },
  {
    "url": "images/phpunit-code-coverage-pcov/01faster-phpunit-code-coverage.jpg",
    "revision": "77e04be180af5024383d852e8e536241"
  },
  {
    "url": "images/phpunit-code-coverage-pcov/02phpunit-tests-without-coverage.jpg",
    "revision": "d7281292c906a6185643b5ac854278d8"
  },
  {
    "url": "images/phpunit-code-coverage-pcov/03phpunit-tests-with-xdebug.jpg",
    "revision": "980c0e46f0aeb8653d18ba8ef1378c5f"
  },
  {
    "url": "images/phpunit-code-coverage-pcov/04phpunit-tests-with-pcov.jpg",
    "revision": "f8785176556f30e67090c2e0b9799034"
  },
  {
    "url": "images/product-http-api/rest-json.jpg",
    "revision": "b10cd211e994968a928cb2ea52dcfc0e"
  },
  {
    "url": "images/pull-request-merge/pull-request-merge-fast-full.jpg",
    "revision": "0a69784c942df0bf3c6bc6abc9e05415"
  },
  {
    "url": "images/pull-request-merge/pull-request-merge-fast.jpg",
    "revision": "607394370cf9b6b6b68dccd28b3886a7"
  },
  {
    "url": "images/pull-request-merge/pull-request-review-time.png",
    "revision": "1a7af35955884cd2e6ac8aa857000432"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/01rabbitmq-docker-nodejs.jpg",
    "revision": "27595a5a8b41ef388ed5b9e9f74eb5a4"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/02rabbitmq-docker.jpg",
    "revision": "a01bb416d251e4ddd64659e518de818c"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/03rabbitmq-mgmt-login.jpg",
    "revision": "415c4d7847c904ddb7860572729f0e8f"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/04rabbitmq-mgmt-overview.jpg",
    "revision": "ccf1370df66cfac4c93112062bbe76ae"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/05rabbitmq-nodejs-consumer-running.jpg",
    "revision": "a3935b5d666c7239ae1a3724ed8110dd"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/06rabbitmq-nodejs-consumer-waiting.jpg",
    "revision": "087968cb7cc0b1c95d56a25ec9d87d26"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/07nodejs-consumer-on-rabbitmq-mgmt.jpg",
    "revision": "ea183828339c6d399fef55bdfda6d94c"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/08nodejs-consumer-processing-messages.jpg",
    "revision": "23712b9a4993b5aa965a9cebd50a00f3"
  },
  {
    "url": "images/rabbitmq-docker-nodejs/09rabbitmq-messages-consumed.gif",
    "revision": "a5be7447142cc85c1ad94ea3a7c77981"
  },
  {
    "url": "images/reasons-to-use-google-cloud-run/00reasons-to-use-cloud-run-full.jpg",
    "revision": "f13c2396d450b7a580c460ef75e0119b"
  },
  {
    "url": "images/reasons-to-use-google-cloud-run/00reasons-to-use-cloud-run.jpg",
    "revision": "e1c347f490a30c163ab37814a398072e"
  },
  {
    "url": "images/reasons-to-use-google-cloud-run/01serverless-issues-full.jpg",
    "revision": "24a83b2cc116050105d9180af8c1290c"
  },
  {
    "url": "images/reasons-to-use-google-cloud-run/01serverless-issues.jpg",
    "revision": "1bab7f740e5ff8de77d0f7d2f3232b42"
  },
  {
    "url": "images/recap-2020/01recap-2020.jpg",
    "revision": "468d970cfcc377cc9c0341473a88ddc6"
  },
  {
    "url": "images/recap-2020/02leaf.jpg",
    "revision": "4adc2bcf33d2299e50e20a5eee62e23d"
  },
  {
    "url": "images/recap-2020/03book.jpg",
    "revision": "7c516be765f9db16d8236c152690115d"
  },
  {
    "url": "images/recap-2020/04eleventy.jpg",
    "revision": "b9d3982929f4faab862c3f5d3e073dd9"
  },
  {
    "url": "images/recap-2020/05alexa.jpg",
    "revision": "9d81e0235ec9102d41bfcecf4245ec11"
  },
  {
    "url": "images/recap-2020/06autechjobs.jpg",
    "revision": "60992a32f7d57b50d7e5997067318969"
  },
  {
    "url": "images/recap-2020/07autechjobs-app.jpg",
    "revision": "441d6ea02af3629b3a2b86fbcf0e9b52"
  },
  {
    "url": "images/recap-2020/08tweet.jpg",
    "revision": "68e14a2111b9c3b1f7b3976d11512e11"
  },
  {
    "url": "images/recap-2020/09blog-seo.jpg",
    "revision": "da69b07887eb114200b95d4b98a37759"
  },
  {
    "url": "images/recap-2020/10interview.jpg",
    "revision": "0aa6fd0d1657eb69761bd5adffb3d481"
  },
  {
    "url": "images/repost-blog/01devto.jpg",
    "revision": "8b11acaeb184e807637592642617822e"
  },
  {
    "url": "images/repost-blog/02medium.jpg",
    "revision": "1f739b13cf54b162fce4050b6182ad07"
  },
  {
    "url": "images/repost-blog/03hackernoon.jpg",
    "revision": "e2c5b7c3ddbb77e55dc40e396501c335"
  },
  {
    "url": "images/repost-blog/04hashnode.jpg",
    "revision": "cb26f22db2870e0cccf3f9d9be545141"
  },
  {
    "url": "images/repost-blog/repost-blog-full.jpg",
    "revision": "07a19fed0fbea8fbd9787a50e18d668a"
  },
  {
    "url": "images/repost-blog/repost-blog.jpg",
    "revision": "7ac41fe39c2ed4825801356ae1999014"
  },
  {
    "url": "images/rss.png",
    "revision": "b476c16b375417dfeb00115234d74f06"
  },
  {
    "url": "images/search.png",
    "revision": "21cef89acced1ffcf8d4d95ec61fd30e"
  },
  {
    "url": "images/serverless-containers/01serverless-containers-full.jpg",
    "revision": "5cc45a09066825821d4ce979c9bbb34b"
  },
  {
    "url": "images/serverless-containers/01serverless-containers.jpg",
    "revision": "cae76cac9aec0c66c38484c76d0f654e"
  },
  {
    "url": "images/serverless-containers/02serverless-containers-full.jpg",
    "revision": "973180ade8066ae13a4da6acf00cb2f1"
  },
  {
    "url": "images/serverless-containers/02serverless-containers.jpg",
    "revision": "4701952dbba195285e0711c30d54419c"
  },
  {
    "url": "images/simplified-gitflow/simple-git-flow.jpg",
    "revision": "3b9de8c1da08708c6b0ff22cee0ac357"
  },
  {
    "url": "images/small-pull-requests/01small-pull-requests.jpg",
    "revision": "e8aef54b0287cf64b637499d373d1efa"
  },
  {
    "url": "images/social-media-break/01social-media-break.jpg",
    "revision": "7d22f4970dcf005580cf1a0ba6edbebc"
  },
  {
    "url": "images/social-media-break/02instagram.jpg",
    "revision": "752d1d6add8ab18eda7defaa5aaedd9f"
  },
  {
    "url": "images/social-media-break/03linkedin.jpg",
    "revision": "3796caf4b50284cde834057b7320f423"
  },
  {
    "url": "images/social-media-break/04facebook.jpg",
    "revision": "2c63e475945e74825b96d3c5eaef6e43"
  },
  {
    "url": "images/social-media-break/social-media-break-full.jpg",
    "revision": "b93d6088b91ed5cad10497fa988a00d7"
  },
  {
    "url": "images/software-deployment-tools/01software-deployment-tools-full.jpg",
    "revision": "9655b3e9a779becb585651b875edb7fa"
  },
  {
    "url": "images/software-deployment-tools/01software-deployment-tools.jpg",
    "revision": "f4270c95616ad9bf6d699d12c12bc159"
  },
  {
    "url": "images/software-deployment-tools/02software-deployment-tools-full.jpg",
    "revision": "5c098d24c71a7f6f08e29fe8dc406dc0"
  },
  {
    "url": "images/software-deployment-tools/02software-deployment-tools.jpg",
    "revision": "403b91a19825b8f72d0b1eedb4c5ec07"
  },
  {
    "url": "images/software-deployment-tools/03archive.jpg",
    "revision": "88f010e72c6cac1a3e4a512ae2673077"
  },
  {
    "url": "images/software-deployment-tools/04file-manager.jpg",
    "revision": "b5e94f875d9a6966eb70ce6544779b41"
  },
  {
    "url": "images/software-deployment-tools/05filezilla-ftp.jpg",
    "revision": "e84ad7e563bef21c4d68cd0b11d1dc2a"
  },
  {
    "url": "images/software-deployment-tools/06capistrano.jpg",
    "revision": "13c5b98d6aa31261c857173314626c6b"
  },
  {
    "url": "images/software-deployment-tools/07docker-kubernetes-full.jpg",
    "revision": "b20f0a28bb074c63275021437b3ff87c"
  },
  {
    "url": "images/software-deployment-tools/07docker-kubernetes.jpg",
    "revision": "44a8306ba83158b4a5f272fa144c6e59"
  },
  {
    "url": "images/software-deployment-tools/08chatops.jpg",
    "revision": "9ac60089e591d59b599c74c0b516a7a1"
  },
  {
    "url": "images/software-deployment-tools/09choose-deployment-tool-full.jpg",
    "revision": "b2d8e8c43e57356c6f293f00758699bf"
  },
  {
    "url": "images/software-deployment-tools/09choose-deployment-tool.jpg",
    "revision": "a44cbfb639ba01667f1f56bc707ed40c"
  },
  {
    "url": "images/software-deployment-tools/deploy-tools-old.jpg",
    "revision": "bb7cf7108ab60ce2887a6863426cb55c"
  },
  {
    "url": "images/software-engineer-podcasts/01software-engineer-podcasts.jpg",
    "revision": "e80aa96be8badb80ed59d1a777de9374"
  },
  {
    "url": "images/software-engineer-podcasts/02staff-eng-podcast.jpg",
    "revision": "e95c84eae71778709249a24ba313b796"
  },
  {
    "url": "images/software-engineer-podcasts/03dev-discuss-podcast.jpg",
    "revision": "2ce62421f70ae19e5b413da96aa941a4"
  },
  {
    "url": "images/software-engineer-podcasts/04in-depth-podcast.jpg",
    "revision": "81f2a501357d6a19c12769f3adb9ffc3"
  },
  {
    "url": "images/software-engineer-skills/01great-software-engineer.jpg",
    "revision": "dba31bbe7f202a479274bcc5030e90aa"
  },
  {
    "url": "images/software-engineering-podcasts-part-05/01software-engineering-podcasts-mic.jpg",
    "revision": "4ae9794bf80668764973e871c7535e81"
  },
  {
    "url": "images/software-engineering-podcasts-part-05/02command-line-heroes.jpg",
    "revision": "8a9d39dcde5db6237a89e939bd183429"
  },
  {
    "url": "images/software-engineering-podcasts-part-05/03developing-up.jpg",
    "revision": "b4d6f1238e04a9d0d9f3a7e0227aa1e5"
  },
  {
    "url": "images/software-engineering-podcasts-part-05/04saas-podcast.jpg",
    "revision": "42e9f11fd6dbc8d15cbd4f879f260b71"
  },
  {
    "url": "images/software-resilience/01softare-resilience-full.jpg",
    "revision": "837687945d1ed6f2ae041c49fa32fa2a"
  },
  {
    "url": "images/software-resilience/01software-resilience.jpg",
    "revision": "3be20f929f03ca55f3be4ed368abe305"
  },
  {
    "url": "images/software-scalability/01software-scalability-full.jpg",
    "revision": "2f6f053c5ce60d94ca20c7cfc69b2531"
  },
  {
    "url": "images/software-scalability/01software-scalability.jpg",
    "revision": "54a36e8e9746fe797a8655737e1815a5"
  },
  {
    "url": "images/software-scalability/02vertical-scaling-software-scalability.jpg",
    "revision": "ccb75095f7994a127d254da90c993d55"
  },
  {
    "url": "images/software-scalability/03horizontal-scaling-software-scalability.jpg",
    "revision": "1a840e8049596fa4654b2fe30b16ba1b"
  },
  {
    "url": "images/speaker-resources/cfp.jpg",
    "revision": "a80b5c599cf2dd3fada74dd57d8bdf36"
  },
  {
    "url": "images/speaker-resources/speaker.jpg",
    "revision": "adf508c5a429c05eb37831bdb6abc76b"
  },
  {
    "url": "images/split-feature/strong-base.jpg",
    "revision": "5b823f5c5e76c2b4080be76b4e409d42"
  },
  {
    "url": "images/split-feature/un-tangle.jpg",
    "revision": "c0c2f78ca38553cf8f75774b495f8fed"
  },
  {
    "url": "images/start-tech-startup/01start-tech-startup.jpg",
    "revision": "30f7d214348e202bc00a33b04c99556f"
  },
  {
    "url": "images/start-tech-startup/02freenom.jpg",
    "revision": "5d9b38df73c6e2772f2e2498a39abbf0"
  },
  {
    "url": "images/start-tech-startup/03cloudflare.jpg",
    "revision": "26340e938aed46f2659772acb3fed5c5"
  },
  {
    "url": "images/start-tech-startup/04stackbit.jpg",
    "revision": "a494640723b0634b5cdeb2db0f90c5fb"
  },
  {
    "url": "images/start-tech-startup/05netlify-forms.jpg",
    "revision": "d49b3ebd19ce3dd6f9567724abab28f7"
  },
  {
    "url": "images/start-tech-startup/06cloud-run.jpg",
    "revision": "3cf2118f031aa66e567a47cdba6cea18"
  },
  {
    "url": "images/start-tech-startup/07cloud-run-costs.jpg",
    "revision": "4e64382bd6d20c81adf687bf7b1cd91c"
  },
  {
    "url": "images/start-tech-startup/08cloud-sql-costs.jpg",
    "revision": "9c2439e238c0a81eac292950033f7a3d"
  },
  {
    "url": "images/static-vs-dynamic-website/01static-vs-dynamic-vs-jam-stack-large.jpg",
    "revision": "a5c3b520374475a3dc60feab71800cd2"
  },
  {
    "url": "images/static-vs-dynamic-website/01static-vs-dynamic-vs-jam-stack.jpg",
    "revision": "6c7db528f1a74219b9f9995c67f31f8e"
  },
  {
    "url": "images/static-vs-dynamic-website/02static-vs-dynamic-vs-jam-stack-large.jpg",
    "revision": "10450828f91da91d8eda58204387c0ea"
  },
  {
    "url": "images/static-vs-dynamic-website/02static-vs-dynamic-vs-jam-stack.jpg",
    "revision": "7394e6e2a37603ed0a69735abf16c567"
  },
  {
    "url": "images/sw-eng-np-infographics-part01/Software_Engineering_Nepal_Mid_2015_Part01.png",
    "revision": "984be016ef05593f82e2b5d3e0c656df"
  },
  {
    "url": "images/sw-eng-np-infographics-part02/Software_Engineering_Nepal_Mid_2015_Part02.png",
    "revision": "54068919b236e623e82a9503edea83d5"
  },
  {
    "url": "images/sw-eng-np-infographics-part03/Software_Engineering_Nepal_Mid_2015_Part03.png",
    "revision": "d512043ca8fb9e7742559db3ea765f4a"
  },
  {
    "url": "images/sw-eng-np-infographics-part04/Software_Engineering_Nepal_Mid_2015_Part04.png",
    "revision": "fb0f44f52a3b1ad7db297c30f145e736"
  },
  {
    "url": "images/swtcm/swtcm.jpg",
    "revision": "f5ea6b9c1198387c90552d3661aa3f66"
  },
  {
    "url": "images/symfony-on-google-cloud-run/00symfony-on-gcr-full.jpg",
    "revision": "38aac27ab85b8866d59d62ca444334ba"
  },
  {
    "url": "images/symfony-on-google-cloud-run/00symfony-on-gcr.jpg",
    "revision": "4ad7b530f1c30f00c87a5d08e2d4386b"
  },
  {
    "url": "images/symfony-on-google-cloud-run/01github-repo.jpg",
    "revision": "25cc37831ac6f9da2c7789e7f500ad0f"
  },
  {
    "url": "images/symfony-on-google-cloud-run/02google-cloud-button.jpg",
    "revision": "a97111db4d8a8dc796aaf4cf23df1806"
  },
  {
    "url": "images/symfony-on-google-cloud-run/03deploy-symfony.jpg",
    "revision": "6ea3e05a0e8b5f57099b192945b9d341"
  },
  {
    "url": "images/symfony-on-google-cloud-run/04symfony-running.jpg",
    "revision": "ab479309af043231c05671d7073224b6"
  },
  {
    "url": "images/take-home-coding-challenges/01take-home-coding-challenges-full.jpg",
    "revision": "88ac4fd6b44b98df476b607bc95dfba8"
  },
  {
    "url": "images/take-home-coding-challenges/01take-home-coding-challenges.jpg",
    "revision": "bdfe2c0ef7b7fffdbbc3447b54dd1eeb"
  },
  {
    "url": "images/take-home-coding-challenges/02take-home-coding-challenge-pull-requests.jpg",
    "revision": "827b77327bd0d4231acbb9c78ba06bc0"
  },
  {
    "url": "images/take-home-coding-challenges/03take-home-coding-challenge-readme.jpg",
    "revision": "98095b0eca6646292bb39b4872efd999"
  },
  {
    "url": "images/tech-career-advice/01tech-career-advice-full.jpg",
    "revision": "ed94bc89013dfc7dbbc952d56a201c2a"
  },
  {
    "url": "images/tech-career-advice/01tech-career-advice.jpg",
    "revision": "c9a877aa3ef1a7fcdf1116c020e590db"
  },
  {
    "url": "images/tech-career-advice/02will-larson-podcast.jpg",
    "revision": "63104e7e7eb8082e07ff0fbdb2887aea"
  },
  {
    "url": "images/tech-career-advice/03julai-evans-brag-doc.jpg",
    "revision": "f0eda53dd0d7cf061710d73d86355e71"
  },
  {
    "url": "images/tech-career-advice/04charity-majors-engineering-levels.jpg",
    "revision": "16d9e5c23e48ea1a9ecc51426ddcbe52"
  },
  {
    "url": "images/tech-career-advice/05damian-career-growth.jpg",
    "revision": "904841fd2248b9bc6fecc627ff99ef3c"
  },
  {
    "url": "images/tech-career-advice/06tanya-reilly-being-glue.jpg",
    "revision": "90259c88f310931fe573492ca080f86e"
  },
  {
    "url": "images/tech-career-advice/07lara-hogan-manager-voltron.jpg",
    "revision": "2cb1fcf8725bcf93953b517b53ce225c"
  },
  {
    "url": "images/tech-career-advice/08hbr-ideacast-talk-yourself-up.jpg",
    "revision": "3910c68157f616567d9cd064ed24151b"
  },
  {
    "url": "images/tech-hiring-funnel-hour-glass/tech-hiring-funnel-hourglass.jpg",
    "revision": "01c5d287abd53709e3d3ff37d52cad9b"
  },
  {
    "url": "images/tech-recruitment-aus-part02/01jasmine-alderton.jpg",
    "revision": "81399f4446163b35398060553d568b5a"
  },
  {
    "url": "images/tech-recruitment-aus-part02/02scott-crowe.jpg",
    "revision": "3ee9b1ef7cb203612faa1edc4d717676"
  },
  {
    "url": "images/tech-recruitment-aus-part02/03olivia-spata.jpg",
    "revision": "28ed9fec735079646a6e31da9d6c6744"
  },
  {
    "url": "images/tech-recruitment-aus-part02/for-hire-full.jpg",
    "revision": "8fdd8512e91c62cf8e7e8b489db0373e"
  },
  {
    "url": "images/tech-recruitment-aus-part02/for-hire.jpg",
    "revision": "a3428fbc0d4882b267b718402e14417d"
  },
  {
    "url": "images/tech-recruitment-aus/cloe.jpg",
    "revision": "357a30845960489fa4c58f43d7ef4e66"
  },
  {
    "url": "images/tech-recruitment-aus/for-hire.jpg",
    "revision": "da91dfce6465956eb07d9bdbac38d15a"
  },
  {
    "url": "images/tech-recruitment-aus/james.jpg",
    "revision": "d1f7eacc6bdeaa7860d0771bcd665865"
  },
  {
    "url": "images/tech-recruitment-aus/kevin.jpg",
    "revision": "43fe5d2551149ae7183273c4f5f92745"
  },
  {
    "url": "images/testing-types/software-testing.jpg",
    "revision": "7caece0b5603d9e63c8aac8044196738"
  },
  {
    "url": "images/things-jr-dev/dn-meetup-4-panelists.jpg",
    "revision": "77a080cdf32fceacbeb38ae19da272e1"
  },
  {
    "url": "images/things-jr-dev/dn-meetup-4-participants.jpg",
    "revision": "544e07109ade32eafa8137649ff50dbe"
  },
  {
    "url": "images/things-jr-dev/geshan-dn-meetup-4.jpg",
    "revision": "07e7638af1e98eab6649159c0c888a2b"
  },
  {
    "url": "images/tip-beginner-sw-eng/puzzle.jpg",
    "revision": "2f770afbd537f35dbb7e7cf083710dba"
  },
  {
    "url": "images/tip-beginner-sw-eng/refund-schema-v2.png",
    "revision": "49ec1c64183535898aa10e380ae367ad"
  },
  {
    "url": "images/top-5-2018/everest.jpg",
    "revision": "9ef59cd6e15e41e9cdc3df7a4e8f247b"
  },
  {
    "url": "images/vegeta-load-testing/01truck-load.jpg",
    "revision": "bbda8120f20404b3b370709b18beacaf"
  },
  {
    "url": "images/vegeta-load-testing/02vegeta-load-testing-text-output.jpg",
    "revision": "0ad9b7b58f9d2916bd5df8845b2e59c4"
  },
  {
    "url": "images/vegeta-load-testing/03vegeta-graph.jpg",
    "revision": "58565e82fcbdda89c79895fe62dd4f0d"
  },
  {
    "url": "images/vegeta-load-testing/04vegeta-multiple-urls.jpg",
    "revision": "6a3995220f958079f28ee2f62f1891b6"
  },
  {
    "url": "images/web-host-as-housing/web-host-as-housing-med.png",
    "revision": "0bf3ae2d9055e252cdb2ce2acc98210c"
  },
  {
    "url": "images/wercker/wercker-talk.jpg",
    "revision": "5fd4979b8312d1462ca3fa881d493ea0"
  },
  {
    "url": "images/why-docker/ship.jpg",
    "revision": "4e22c419f3a88a525c5ae1b61901292d"
  },
  {
    "url": "images/why-docker/whale.jpg",
    "revision": "e46c769c1ef7b9797f4c57be394b411e"
  },
  {
    "url": "images/work-from-home-tips/01work-from-home-tips-large.jpg",
    "revision": "e89c4a410471de60bcf0d05ab1b9414d"
  },
  {
    "url": "images/work-from-home-tips/01work-from-home-tips.jpg",
    "revision": "76c31541c7e423f711db97f120e89806"
  },
  {
    "url": "index.html",
    "revision": "c081cf221f122e9c36bc73551e8a6e3a"
  },
  {
    "url": "js/all.min.js",
    "revision": "bd7fccc1ee3b9be649a69ccd2d3a07da"
  },
  {
    "url": "manifest.json",
    "revision": "66a1adbc75c57d0b0626c759a29ec9e6"
  },
  {
    "url": "posts/1/index.html",
    "revision": "c618c874871cae86f3674a0987f7155c"
  },
  {
    "url": "posts/10/index.html",
    "revision": "c10b5af8700066bd1318b38d818e6934"
  },
  {
    "url": "posts/11/index.html",
    "revision": "76ff14ee0ef0d9587c12bc199d20a10f"
  },
  {
    "url": "posts/12/index.html",
    "revision": "8f279ef4664fd1b989cf4f1402ed49c8"
  },
  {
    "url": "posts/13/index.html",
    "revision": "ba309881fe1b5d91f14ef3ebbad457d9"
  },
  {
    "url": "posts/14/index.html",
    "revision": "1cf888a4e5cf2ac4569e36dd66dfa702"
  },
  {
    "url": "posts/15/index.html",
    "revision": "cfe195508bdaafde74426ccb209232c9"
  },
  {
    "url": "posts/16/index.html",
    "revision": "6d3b2d0b08f0cc32b1ac16b986b98600"
  },
  {
    "url": "posts/17/index.html",
    "revision": "ef5c0d1b68821c2167ebcd44fb6b6586"
  },
  {
    "url": "posts/18/index.html",
    "revision": "da93fe6964bb90d184ad002429ed0ced"
  },
  {
    "url": "posts/19/index.html",
    "revision": "9a0f42f54f1b3c89e670c617cdba484a"
  },
  {
    "url": "posts/2/index.html",
    "revision": "d6fea4a510c687389d859cf357004bb3"
  },
  {
    "url": "posts/20/index.html",
    "revision": "6e357484ba3e67a7032ae6d57e61f2b3"
  },
  {
    "url": "posts/21/index.html",
    "revision": "0b377e2c53c2179fbdb8dd76e6854f8d"
  },
  {
    "url": "posts/22/index.html",
    "revision": "71c9058a9aad3971f1f38c8c5639dea5"
  },
  {
    "url": "posts/23/index.html",
    "revision": "588c476c75af3131805da91507b9ffac"
  },
  {
    "url": "posts/24/index.html",
    "revision": "c71bbf4e0ca9560e60416e13b50d22ad"
  },
  {
    "url": "posts/25/index.html",
    "revision": "4a4c3d41fee74fd4493f3f59715f25ff"
  },
  {
    "url": "posts/26/index.html",
    "revision": "ba77d14fe840a51c5eb0e6422438b0a2"
  },
  {
    "url": "posts/27/index.html",
    "revision": "e128a4647d5ae1a98fd5ccfb2ab7e2ad"
  },
  {
    "url": "posts/28/index.html",
    "revision": "7d426ef5cd64f09ac56eb272f220abbc"
  },
  {
    "url": "posts/29/index.html",
    "revision": "e61595c2bc0084606cf55f390c083745"
  },
  {
    "url": "posts/3/index.html",
    "revision": "83712984feeea3882c6d805ab0ba5146"
  },
  {
    "url": "posts/30/index.html",
    "revision": "7f6ee1504b6dbfa203e85d3ae6f180c7"
  },
  {
    "url": "posts/31/index.html",
    "revision": "5b4bf4935f47c3f9e43d054ef7f32821"
  },
  {
    "url": "posts/32/index.html",
    "revision": "a78242ebaf970a3cc2c6f21ddd0b1f65"
  },
  {
    "url": "posts/33/index.html",
    "revision": "a02f99e0f8d0e7316f9dfd702f416abc"
  },
  {
    "url": "posts/34/index.html",
    "revision": "3a4fdc27b4a9f8ec02c9883ab5bc78f2"
  },
  {
    "url": "posts/35/index.html",
    "revision": "24bd71d95f91c144e03c5ace8dcb950e"
  },
  {
    "url": "posts/36/index.html",
    "revision": "a43af9c58c3dfa8d0f46f8d9ca843535"
  },
  {
    "url": "posts/4/index.html",
    "revision": "da3e5a90e1a349761400f11c686c3f4a"
  },
  {
    "url": "posts/5/index.html",
    "revision": "0616e3f07f3427526ccc060512d89f10"
  },
  {
    "url": "posts/6/index.html",
    "revision": "1268b669d4ce5d8545b19aa5a253b5f9"
  },
  {
    "url": "posts/7/index.html",
    "revision": "e0d717aedb3792cdbf1ba72fb5b13df6"
  },
  {
    "url": "posts/8/index.html",
    "revision": "d696a453858a1dd47c9dfe5ff48b4d5f"
  },
  {
    "url": "posts/9/index.html",
    "revision": "4cd513cc5863618d861013115eec9be5"
  },
  {
    "url": "seobilityverify_1995707.html",
    "revision": "cd31ce130d4a0b20e709259104fd0b9a"
  },
  {
    "url": "stats.json",
    "revision": "aed8fc3c59663c01aaaddb56387af795"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
