/*global jQuery, window, document, console */

(function ($) {
    'use strict';

    function handleLoginSubmit(e) {
        var url = this.getAttribute('action'),
            username = this.querySelector('[name="username"]').value,
            password = this.querySelector('[name="password"]').value;

        e.preventDefault();

        if (username.length === 0 || password.length === 0) {
            window.alert('Please enter a username and password.');
        } else {
            this.reset();

            $.ajax(url, {
                method: 'POST',
                data: {
                    username: username,
                    password: password
                },
                success: function handleLoginSuccess() {
                    console.log('succeeded');
                },
                error: function handleLoginFailure() {
                    console.log('failed');
                }
            });
        }
    }

    $('body').on('submit', '.login-module', handleLoginSubmit);

}(jQuery));
