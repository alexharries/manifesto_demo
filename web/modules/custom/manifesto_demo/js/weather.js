/**
 * @file
 * js/weather.js
 *
 * Dummy script to pretend to retrieve weather for a given postcode.
 */

(function ($, Drupal) {
  Drupal.behaviors.manifestoDemoGetWeatherByPostcode = {
    attach: function (context, settings) {

      $(document).ready(function () {
        // Only run this call once.
        if (typeof manifestoDemoGetWeatherByPostcodeHasRun == 'undefined') {
          var manifestoDemoGetWeatherByPostcodeHasRun = 'monkeys!';

          // console.log(drupalSettings.manifestoDemo.callbackURL, 'drupalSettings.manifestoDemo.callbackURL');
          // console.log(drupalSettings.manifestoDemo.postcode, 'drupalSettings.manifestoDemo.postcode');
          // console.log(drupalSettings.manifestoDemo.articleWeatherElephantIdentifier, 'drupalSettings.manifestoDemo.articleWeatherElephantIdentifier');

          $.getJSON(drupalSettings.manifestoDemo.callbackURL + '/' + drupalSettings.manifestoDemo.postcode, function (weatherString) {
            // console.log(weatherString.data, 'weatherString.data');

            // Remove any existing instances of .manifesto-demo-article-weather.
            // console.log($(drupalSettings.manifestoDemo.articleWeatherElephantIdentifier + ' .manifesto-demo-article-weather'));
            $(drupalSettings.manifestoDemo.articleWeatherElephantIdentifier + ' .manifesto-demo-article-weather').remove();

            // Typically, you might want to add a themeable template here - for
            // this example, I'm just going to inject the weather status.
            $("<div/>", {
              "class": "manifesto-demo-article-weather",
              html: Drupal.t('The weather is: @weather', {'@weather': weatherString.data})
            }).appendTo(drupalSettings.manifestoDemo.articleWeatherElephantIdentifier);
          });
        }
      })
    }
  };
})(jQuery, Drupal, drupalSettings);
