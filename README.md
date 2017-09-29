# MessengerChatBot

## Project Outline
- The chatbot should be able to show a graph.
    - current functionality:
        - shows link to image of generic graph
    - to do:
        - display actual image
    - issues:
        - not able to display image
    - possible solutions:
        - image_url
        - use postback for payload
        - image attachment (https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment/)

- The chatbot on FB Messenger should have buttons you can select to continue the conversation
    - current functionality:
      - using quick responses
    - to do:
    - issues:
        - no chain of events
    - possible solutions:
        - have bot move through tree given a particular response

- The chatbot does not need to show REAL BANK information, but if you could simulate the experience that would be helpful.
    - current functionality:
        - check fake savings and checking account
        - tip for saving
        - check bills
    - to do:
        - check spending for given time frame
        - check spending for specific location
        - check spending for particular set of items
    - issues:
        - creating response for spending on particular items
    - possible solutions:
        - final product would have more info on user, able to search a db for key word


- The chatbot should have a personality so perhaps think about how to make it funny or expressive.
    - current functionality:
        - chatbot has options in spanish
        - only one tip is being displayed
    - to do:
        - add more helpful and funny tips

## Resources:
- https://developers.facebook.com/docs/messenger-platform
- https://medium.com/mindlayer/for-beginners-a-facebook-bot-tutorial-3bb2063091c7
- https://www.npmjs.com/package/fb-bot-framework
- https://ngrok.com/
