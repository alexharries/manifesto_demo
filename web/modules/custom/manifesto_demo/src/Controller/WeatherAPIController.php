<?php

/**
 * @file
 * Contains \Drupal\manifesto_demo\WeatherAPIController.
 */

namespace Drupal\manifesto_demo\Controller;

use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Controller routines for manifesto_demo Weather API routes.
 */
class WeatherAPIController extends ControllerBase {

  /**
   * {@inheritdoc}
   */

  public function get_weather($postcode, Request $request) {

    // @todo: add weather call here - e.g. using cURL. For example:
    // https://samples.openweathermap.org/data/2.5/weather?q={$postcode},UK&appid=b6907d289e10d714a6e88b30761fae22

    // It's always sunny in Drupal-dephia...
    $response['data'] = $this->t('sunny');
    $response['method'] = 'GET';

    return new JsonResponse($response);
  }

}
