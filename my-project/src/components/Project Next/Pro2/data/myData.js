import playIcon from './../img/play icon.png';
import heroImg from './../img/hero-services-img.webp';
import featureImg1 from './../img/fearture-services-icon1.png';
import featureImg2 from './../img/fearture-services-icon2.png';
import featureImg3 from '../img/fearture-services-icon3.png';
import descIcon from './../img/check-icon.png';
import arrowRight from './../img/arrow-rignt.png';
import descImg1 from './../img/about-company-1.jpg';
import descImg2 from './../img/about-company-3.jpg';
import descImg3 from './../img/about-company-2.jpg';
import client1 from './../img/client-1.png';
import client2 from './../img/client-2.png';
import client3 from './../img/client-3.png';
import client4 from './../img/client-4.png';
import client5 from './../img/client-5.png';
import client6 from './../img/client-6.png';
import cartIcon1 from './../img/cart-icon-1.png';
import cartIcon2 from './../img/cart-icon-2.png';
import cartIcon3 from './../img/cart-icon-3.png';
import feartureImg from './../img/tabs-3.jpg';
import cdImg1 from './../img/features-1.jpg';
import cdImg2 from './../img/features-2.jpg';
import IDP1 from './../img/IDP1.png';
import IDP2 from './../img/IDP2.png';
import IDP3 from './../img/IDP3.png';
import serviceIcon1 from './../img/services-cart-icon-1.png';
import serviceIcon2 from './../img/services-cart-icon-2.png';
import serviceIcon3 from './../img/services-cart-icon-3.png';
import serviceIcon4 from './../img/services-cart-icon-4.png';
import serviceIcon5 from './../img/services-cart-icon-5.png';
import serviceIcon6 from './../img/services-cart-icon-6.png';
import serviceBtnIcon from './../img/services-cart-btn-icon.png';
import moreServiceImg from './../img/more-services-img.jpg';
import pricingIconCheck from './../img/pricing-check-icon.png';
import pricingIconCross from './../img/pricing-cross-icon.png';
import iconDropDown from './../img/icon/iconDropDonw.png';
import iconDropDown_blue from './../img/icon/iconDropDonw-blue.png';
import imgTestimonail1 from './../img/Testimonails-img-1.jpg';
import imgTestimonail2 from './../img/Testimonails-img-2.jpg';
import imgTestimonail3 from './../img/Testimonails-img-3.jpg';
import imgTestimonail4 from './../img/Testimonails-img-4.jpg';
import imgTestimonail5 from './../img/Testimonails-img-5.jpg';
import iconCartContactLocationBlack from './../img/icon/iconContact-1.png';
import iconCartContactPhoneBlack from './../img/icon/iconContact-2.png';
import iconCartContactEmailBlack from './../img/icon/iconContact-3.png';
import XBlue from './../img/twitter-blue.png';
import XBlack from './../img/twitter-black.png';
import FacebookBlue from './../img/facebook-blue.png';
import FaceBookBlack from './../img/facebook-black.png';
import InstagramBlue from './../img/instagram-blue.png';
import InstagramBlack from './../img/instagram-black.png';
import LinkedInBlue from './../img/linkedin-blue.png';
import LinkedInBlack from './../img/linkedin-black.png';

const styleWithIconCross = ['text-gray-500',' line-through'];
export const dataInformation = {
    heroData : {
        title : "Welcome to QuickStart",
        subTitle : "Quickly start your project now and set the stage for success",
        btnGetStart : "Get Started",
        btnWatch : {
            icon : playIcon,
            title: "Watch Video"
        },
        heroImg : heroImg,
        heroFeature : {
            feat1 :{
                img : featureImg1,
                title : 'Lorem Ipsum',
                description : 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
            },
            feat2 : {
                img : featureImg2,
                title : 'Dolor Sitema',
                description : 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa'
            }, 
            feat3 : {
                img : featureImg3,
                title : 'Sed ut perspiciatis',
                description : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'
            }
        }
    },
    aboutData : {
        subTitle : 'Who We Are',
        title : 'Unleashing Potential with Creative Strategy',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        iconDes : descIcon,
        iconBtn : arrowRight,
        subDescription : {
            sub1 : 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            sub2 : 'Duis aute irure dolor in reprehenderit in voluptate velit.',
            sub3 : ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
        },
        img : {
            img1: descImg1,
            img2: descImg2,
            img3: descImg3
        },
        imgClient : {
            img1 : client1,
            img2 : client2,
            img3 : client3,
            img4 : client4,
            img5 : client5,
            img6 : client6
        }
    },//about data
    feartureData : {
        title : "Features",
        subTitle : "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        feartureImg : feartureImg,
        cartData : {
            cart1 : {
                icon: cartIcon1,
                title: 'Modi sit est dela pireda nest',
                description : 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
            },
            cart2 : {
                icon: cartIcon2,
                title: 'Unde praesenti mara setra le',
                description : 'Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas'
            },
            cart3 : {
                icon: cartIcon3,
                title: 'Pariatur explica nitro dela',
                description : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut'
            },
        },
        feartureDetail: {
            cart1 : {
                heading: 'Corporis temporibus maiores provident',
                detail : 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
                btnName :'Learn more', 
                cartImg : cdImg1
            },
            cart2 :{
                heading: 'Neque ipsum omnis sapiente quod quia dicta',
                detail : 'Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares',
                IconDetailOption : {
                    IDP1 : IDP1,
                    IDP2 : IDP2,
                    IDP3 : IDP3
                },
                detailOption :{
                    IDP1 : 'Et corporis ea eveniet ducimus.',
                    IDP2 : 'Exercitationem dolorem sapiente.',
                    IDP3 : 'Veniam quia modi magnam.'
                },
                btnName :'Learn more', 
                cartImg : cdImg2
            }
        }
    },//
    servicesData : {
        title : "Services",
        subTitle : "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
        cartData : {
            cart1 : {
                icon: serviceIcon1,
                iconBG : 'bg-[#0000F5]',
                iconBorder : 'border-[#0000AB]',
                heading : 'Nesciunt Mete',
                description : 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
                btn: {
                    btnName: 'LearnMore',
                    btnIcon: serviceBtnIcon
                }
            },
            cart2 : {
                icon: serviceIcon2,
                iconBG: 'bg-[#FF9F7E]',
                iconBorder : 'border-[#BD4C31]',
                heading : 'Eosle Commodi',
                description : 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
                btn: {
                    btnName: 'Learn more',
                    btnIcon: serviceBtnIcon
                }
            },
            cart3 : {
                icon: serviceIcon3,
                iconBG: 'bg-[#54753F]',
                iconBorder : 'border-[#78A75A]',
                heading : 'Ledo Markt',
                description : 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
                btn: {
                    btnName: 'Learn more',
                    btnIcon: serviceBtnIcon
                }
            },
            cart4 : {
                icon: serviceIcon4,
                iconBG: 'bg-[#FF3C00]',
                iconBorder : 'border-[#BD2C00]',
                heading : 'Asperiores Commodi',
                description : 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
                btn: {
                    btnName: 'Learn more',
                    btnIcon: serviceBtnIcon
                }
            },
            cart5 : {
                icon: serviceIcon5,
                iconBG: 'bg-[#B327BD]',
                iconBorder : 'border-[#EA33F7]',
                heading : 'Velit Doloremque.',
                description : 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
                btn: {
                    btnName: 'Learn more',
                    btnIcon: serviceBtnIcon
                }
            },
            cart6 : {
                icon: serviceIcon6,
                iconBG: 'bg-[#FF68C7]',
                iconBorder : 'border-[#B54A8D]',
                heading : 'Dolori Architecto',
                description : 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
                btn: {
                    btnName: 'Learn more',
                    btnIcon: serviceBtnIcon
                }
            }
        },
        moreServicesData:{
            title : 'Enim quis est voluptatibus aliquid consequatur',
            subTitle : 'Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi',
            moreSersImg : moreServiceImg,
            description : {
                des1 : {
                    icon: IDP1,
                    text: {
                        headerText : 'Lorem Ipsum',
                        footerText : 'Voluptatum deleniti atque corrupti quos dolores et quas molestias'
                    }
                },
                des2 : {
                    icon: IDP2,
                    text: {
                        headerText :'Nemo Enim',
                        footerText :'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise'
                    }
                },
                des3 : {
                    icon: IDP3,
                    text: {
                        headerText : 'Dine Pad',
                        footerText : 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit'
                    }
                },
                des4 : {
                    icon: IDP3,
                    text: {
                        headerText : 'Tride clov',
                        footerText : 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit'
                    }
                }
            }
        }
    },
    pricingData : {
        title: 'Pricing',
        subTitle : 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        textStyle : {
            cart1 : {
                cartTitle : 'Free Plan',
                cartPrice : '0',         
                iconCartList : {
                    li1 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Quam adipiscing vitae proin'},
                    li2 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nec feugiat nisl pretium'},
                    li3 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nulla at volutpat diam uteera'},
                    li4 : {icon: pricingIconCross, colorStyle : styleWithIconCross, text : 'Pharetra massa massa ultricies'},
                    li5 : {icon: pricingIconCross, colorStyle : styleWithIconCross, text : 'Massa ultricies mi quis hendrerit'},
                    li6 : {icon: pricingIconCross, colorStyle : styleWithIconCross, text : 'Voluptate id voluptas qui sed aperiam rerum'},
                    li7 : {icon: pricingIconCross, colorStyle : styleWithIconCross, text : 'Iure nihil dolores recusandae odit voluptatibus'}
                },
                isButton : false
            },
            cart2 : {
                cartTitle : 'Business Plan',
                cartPrice : '29',
                iconCartList : {
                    li1 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Quam adipiscing vitae proin'},
                    li2 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nec feugiat nisl pretium'},
                    li3 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nulla at volutpat diam uteera'},
                    li4 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Pharetra massa massa ultricies'},
                    li5 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Massa ultricies mi quis hendrerit'},
                    li6 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Voluptate id voluptas qui sed aperiam rerum'},
                    li7 : {icon: pricingIconCross, colorStyle : styleWithIconCross, text : 'Iure nihil dolores recusandae odit voluptatibus'}
                },
                isButton : true
            },
            cart3 : {
                cartTitle : 'Devolper Plan',
                cartPrice : '49',
                iconCartList : {
                    li1 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Quam adipiscing vitae proin'},
                    li2 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nec feugiat nisl pretium'},
                    li3 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Nulla at volutpat diam uteera'},
                    li4 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Pharetra massa massa ultricies'},
                    li5 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Massa ultricies mi quis hendrerit'},
                    li6 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Voluptate id voluptas qui sed aperiam rerum'},
                    li7 : {icon: pricingIconCheck, colorStyle : 'text-gray-700', text : 'Iure nihil dolores recusandae odit voluptatibus'}
                },
                isButton : false
            },

        }
    },
    frequencyQuesionData : {
        title : 'Frequently Asked Questions',
        subTitle : '',
        iconDropDown : iconDropDown,
        iconDropDown_blue : iconDropDown_blue,
        question : {
            question1 : {
                question : 'Non consectetur a erat nam at lectus urna duis?',
                answer   : 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
            },
            question2 : {
                question : 'Feugiat scelerisque varius morbi enim nunc faucibus?',
                answer   : 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
            },
            question3 : {
                question : 'Dolor sit amet consectetur adipiscing elit pellentesque?',
                answer   : 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
            },
            question4 : {
                question : 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
                answer   : 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
            },
            question5 : {
                question : 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
                answer   : 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
            },
            quesion6 : {
                question : 'Perspiciatis quod quo quos nulla quo illum ullam?',
                answer  : 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.'
            }
        }
    },
    testimonialsData: {
        title: 'Testimonials',
        subTitle: 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        cartInfo: [
          {
            cartTitle: 'Matt Brandon',
            cartSubTitle: 'Freelancer',
            cartDescription:
              'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
            cartImg: imgTestimonail1,
          },
          {
            cartTitle: 'John Larson',
            cartSubTitle: 'Entrepreneur',
            cartDescription:
              'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
            cartImg: imgTestimonail2,
          },
          {
            cartTitle: 'Saul Goodman',
            cartSubTitle: 'Ceo & Founder',
            cartDescription:
              'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
            cartImg: imgTestimonail3,
          },
          {
            cartTitle: 'Sara Wilsson',
            cartSubTitle: 'Designer',
            cartDescription:
              'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eramvelit sunt aliqua noster fugiat irure ametlegam anim culpa.',
            cartImg: imgTestimonail4,
          },
          {
            cartTitle: 'Jena Karlis',
            cartSubTitle: 'Store Owner',
            cartDescription:
              'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            cartImg: imgTestimonail5,
          },
        ],
    },
    contacData : {
        title : 'Contact', 
        subTitle : 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
        cartInfo :[
            {
                icon : iconCartContactLocationBlack,
                cartTitle : 'Address', 
                cartSubTitle : 'A108 Adam Street, New York, NY 535022'
            },
            {
                icon : iconCartContactPhoneBlack,
                cartTitle : 'Call Us', 
                cartSubTitle : '+1 5589 55488 55'
            },
            {
                icon : iconCartContactEmailBlack,
                cartTitle : 'Email Us', 
                cartSubTitle : 'info@example.com'
            }
        ]
    },
    footerData: {
        icon: {
            XIcon : {
                black:XBlack,
                blue: XBlue
            },
            FacebookIcon : {
                black:FaceBookBlack,
                blue: FacebookBlue
            },
            InstagramIcon : {
                black:InstagramBlack,
                blue: InstagramBlue
            },
            LinkedInIcon : {
                black:LinkedInBlack,
                blue: LinkedInBlue
            } 
        }
    }
};