<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define('CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
add_action('wp_enqueue_scripts', 'child_enqueue_styles', 15);

function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_filter('gettext', 'remove_by_author', 20, 3);
function remove_by_author($translated_text, $text, $domain) {
    if ($text === 'par %s') {
        $translated_text = '%s';
    }
    return $translated_text;
}

?>