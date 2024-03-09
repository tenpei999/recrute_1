<?php

// Define development mode status
define("IS_VITE_DEVELOPMENT", false);

// Define distribution folder and URLs
define('DIST_DEF', 'dist');
define('DIST_URI',  get_template_directory_uri() . '/' . DIST_DEF);
define('DIST_PATH', get_template_directory() . '/' . DIST_DEF);

// Define JavaScript dependencies and load position
define('JS_DEPENDENCY', array()); // Example: array( 'jquery' )
define('JS_LOAD_IN_FOOTER', true); // Load scripts in footer?

// Define Vite development server information
define('VITE_SERVER', 'http://localhost:3000');
define('VITE_ENTRY_POINT', '/main.js');
