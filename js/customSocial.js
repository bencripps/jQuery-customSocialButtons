(function($) {
    'use strict';
    $.fn.customSocial = function( defaults ) {

        var settings = $.extend({
            //networks
            facebook: false,
            twitter: false,
            email: false,
            github: false,
            googlePlus: false,
            flickr: false,
            linkedIn: false,
            instagram: false,
            pinterest: false,
            tumblr: false,
            vine: false,
            stackoverflow: false,
            //icon styling
            mainColor: 'white',
            iconMargin: '20px',
            iconSize: '40px',
            //container styling
            width: '100%',
            backgroundColor: 'gray',
            border: 'none',
            roundedBorder: 'none',
            //events
            customHover: true,
            onContainerClick: function() {},
            onContainerMouseenter: function() {},
            onIconMouseenter: function() {},
            onIconClick: function() {},
        }, defaults ),

        getURL = function( obj, string, tumblr ) {

            var isObject = obj instanceof Object,
                url; 

            if ( !tumblr ) {
                url = isObject ? obj.url : string + obj;
            }
            else {
                url = isObject ? obj.url : obj + string;
            }

            return url;
        },
        getIconStyling = function() {
            return [' style=\'font-size:', settings.iconSize, '; color: ', settings.mainColor, '; margin: ', settings.iconMargin, ';'].join('');
        },
        getFBIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'facebook.com/' ), '\'><i class=\'fa fa-facebook customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getStackIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'stackoverflow.com' ), '\'><i class="fa fa-stack-overflow customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getYouTubeIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'youtube.com/' ), '\'><i class=\'fa fa-youtube customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getTwitIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'twitter.com/' ), '\'><i class=\'fa fa-twitter customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getEmailIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'mailto:' ), '\'><i class=\'fa fa-envelope-square customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getGitIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'github.com/' ), '\'><i class=\'fa fa-github customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getGooglePlusIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'plus.google.com/s/' ), '\'><i class="fa fa-google-plus customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getFlickrIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'flickr.com/photos/' ), '\'><i class=\'fa fa-flickr customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getLinkedInIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'linkedin.com/users/' ), '\'><i class=\'fa fa-linkedin customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getInstagramIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'instagram.com/' ), '\'><i class=\'fa fa-instagram customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getPinterestIcon = function( input ) {
            return ['<a href=\'//', getURL( input, 'pinterest.com/' ), '\'><i class=\'fa fa-pinterest customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getTumblrIcon = function( input ) {
            return ['<a href=\'//', getURL( input, '.tumblr.com', 'tumblr' ), '\'><i class=\'fa fa-tumblr customIcon\'', getIconStyling(), '\'></i></a>'].join('');
        },
        getVineIcon = function( input ) {
            return ['<a href=\'//vine.co/', getURL( input, '//vine.co/' ), '\'><i class=\'fa fa-vine customIcon\'', getIconStyling(), '"></i></a>'].join('');
        },
        compileHTMLinsert = function() {

            var HTMLinsert= '';

            if ( settings.facebook ) {
                HTMLinsert+= getFBIcon( settings.facebook );
            }

            if ( settings.twitter ) {
                HTMLinsert+= getTwitIcon( settings.twitter );
            }

            if ( settings.email ) {
                HTMLinsert+= getEmailIcon( settings.email );
            }

            if ( settings.github ) {
                HTMLinsert+= getGitIcon( settings.github );
            }

            if ( settings.googlePlus ) {
                HTMLinsert+= getGooglePlusIcon( settings.googlePlus );
            }


            if ( settings.flickr ) {
                HTMLinsert+= getFlickrIcon( settings.flickr );
            }

            if ( settings.linkedIn ) {
                HTMLinsert+= getLinkedInIcon( settings.linkedIn );
            }

            if ( settings.instagram ) {
                HTMLinsert+= getInstagramIcon( settings.instagram );
            }

            if ( settings.pinterest ) {
                HTMLinsert+= getPinterestIcon( settings.pinterest );
            }

            if ( settings.tumblr ) {
                HTMLinsert+= getTumblrIcon( settings.tumblr );
            }

            if ( settings.vine ) {
                HTMLinsert+= getVineIcon( settings.vine );
            }

            if ( settings.youtube ) {
                HTMLinsert+= getYouTubeIcon( settings.youtube );
            }

            if ( settings.stackoverflow ) {
                HTMLinsert+= getStackIcon( settings.stackoverflow );
            }

            return HTMLinsert;
        },
        hover = function( $this ) {
            $this.stop().animate({ 'opacity': '.7'}).on('mouseout', function() { $this.stop().animate({'opacity': '1'}); });
        },

        addStyles = function( $this ) {
            $this.css({ 'backgroundColor': settings.backgroundColor,
                        'width': settings.width,
                        'border-radius': settings.roundedBorder,
                        'border': settings.border });      
            return $this;
        };

        //event handling

        this.on('click', function(event) {
            if ( event.target.id === $(this).attr('id') ) {
                settings.onContainerClick.call(this);
            }
        });

        this.on('mouseenter', function() {
            settings.onContainerMouseenter.call(this);
        });

        $(document).on('mouseenter', '.icon', function() {
            settings.onIconMouseenter.call(this);
        });

        $(document).on('click', '.icon', function() {
            settings.onIconClick.call(this);
        });

        return this.each( function() {

            var $this = addStyles ( $(this) ),
                HTMLinsert = compileHTMLinsert();

            $this.append(HTMLinsert);

            $(document).on('mouseover', '.customIcon', function() {
                if (settings.customHover) {
                    hover( $(this) );
                }
            });

        });
    };
})(jQuery);