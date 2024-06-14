<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'planty' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Yl jyY._|CTxvNv_mpErt:W1)mIT#.1Nq|zn3XkTYx-Zc*oYDyKox*u_Fa {p5C7' );
define( 'SECURE_AUTH_KEY',  'RK5nUaNk+eBkF[]X-?,5m~v1Y54/qKQ#rs:x*lpK[EyCf1:2XA92BsyQFa#LFGV$' );
define( 'LOGGED_IN_KEY',    '_7]TGQv^!iEp^z6wz3S(<l*;UJdEz7Z3).N9F[v7[CA#By2`]sTX> MbrZt:*;p6' );
define( 'NONCE_KEY',        'fmIV&p?#P|j]v@]C/6leUC?/d+>y6*iWo`a}%D=;b`^=Ci~V5:-!<ZuqTNgJ`zyJ' );
define( 'AUTH_SALT',        '~Hg?Urw0/]n5zW~p_L:W|nrl1fmU,wO[.hW~l>h.S*P4Yv_{7I])5bAu]I{U%FOz' );
define( 'SECURE_AUTH_SALT', '4$W%;rAHmr&c_V{+3R>_Dn9uXE$O:OiL#Z9:u~SJJ#nM.4NI[nUWiC&DZtzXL@gl' );
define( 'LOGGED_IN_SALT',   '^n%i3wmuEISAmH&da==K>(@]0IW*f}[S*.ce:*xy?,~dXzm$-RmI:F`B[^15~ Hb' );
define( 'NONCE_SALT',       'cG;=%A}^] xIZM7<Q;1BPw`rjxy&hg$4isr}8[nh.sK.ONV&bg|(0/A96o^}4@Pc' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
