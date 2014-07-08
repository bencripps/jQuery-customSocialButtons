(function($) {

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

	getIconStyling = function() {

		return ' style="font-size:' + settings.iconSize + '; color: ' + settings.mainColor + '; margin: ' +  settings.iconMargin + ';';

	},

	getFBIcon = function( url ) {

		return '<a href="//facebook.com/' + url + '"><i class="fa fa-facebook customIcon"' + getIconStyling() + '"></i></a>';

	},

	getTwitIcon = function( url ) {

		return '<a href="//twitter.com/' + url + '"><i class="fa fa-twitter customIcon"' + getIconStyling() + '"></i></a>';

	},

	getEmailIcon = function( url ) {

		return '<a href="mailto:' + url + '"><i class="fa fa-envelope-square customIcon"' + getIconStyling() + '"></i></a>';

	},

	getGitIcon = function( url ) {

		return '<a href="//github.com/' + url + '"><i class="fa fa-github customIcon"' + getIconStyling() + '"></i></a>';
	},

	getGooglePlusIcon = function( url ) {

		return '<a href="//plus.google.com/s/' + url + '"><i class="fa fa-google-plus customIcon"' + getIconStyling() + '"></i></a>';

	},

	getFlickrIcon = function( url ) {

		return '<a href="//flickr.com/photos/' + url + '"><i class="fa fa-flickr customIcon"' + getIconStyling() + '"></i></a>';

	},

	getLinkedInIcon = function( url ) {

		return '<a href="//linkedin.com/users/' + url + '"><i class="fa fa-linkedin customIcon"' + getIconStyling() + '"></i></a>';

	},

	getInstagramIcon = function( url ) {

		return '<a href="//instagram.com/' + url + '"><i class="fa fa-instagram customIcon"' + getIconStyling() + '"></i></a>';

	},

	getPinterestIcon = function( url ) {

		return '<a href="//pinterest.com/' + url + '"><i class="fa fa-pinterest customIcon"' + getIconStyling() + '"></i></a>';

	},

	getTumblrIcon = function( url ) {

		return '<a href="//' + url + '.tumblr.com"><i class="fa fa-tumblr customIcon"' + getIconStyling() + '"></i></a>';

	},

	getVineIcon = function( url ) {

		return '<a href="//vine.co/' + url + '"><i class="fa fa-vine customIcon"' + getIconStyling() + '"></i></a>';

	},

	compileHTMLinsert = function() {

		var HTMLinsert= "";

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

		return HTMLinsert;

	},

	hover = function( $this ) {

		$this.stop().animate({ 'opacity': .7}).on('mouseout', function() { $this.stop().animate({'opacity': 1}); });

	},

	addStyles = function( $this ) {

		$this	.css('backgroundColor', settings.backgroundColor )

				.css('width', settings.width )

				.css('border-radius', settings.roundedBorder )

				.css('border', settings.border);	

		return $this;

	};

	//event handling

	this.on('click', function(event) {

		settings.onContainerClick.call(this);

	});

	this.on('mouseenter', function(event) {

		settings.onContainerMouseenter.call(this);

	});

	$(document).on('mouseenter', '.icon', function(event) {

		settings.onIconMouseenter.call(this);

	});

	$(document).on('click', '.icon', function(event) {

		settings.onIconClick.call(this);

	});

	//return

	return this.each( function() {

		var $this = addStyles ( $(this) ),
			HTMLinsert = compileHTMLinsert();

		$this.append(HTMLinsert);

		$(document).on('mouseover', '.customIcon', function( event ) {

			if (settings.customHover) {

				hover( $(this) );

			}	

		});


	});
	

};

})(jQuery);