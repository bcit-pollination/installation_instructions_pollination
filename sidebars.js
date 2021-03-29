module.exports = {

    docs: [
        {
            type: 'category',
            label: 'Markdown instructions',
            items: [
                "md_instructions/getting-started",
                "md_instructions/create-a-page",
                "md_instructions/create-a-document",
                "md_instructions/create-a-blog-post",
                "md_instructions/markdown-features",
                "md_instructions/thank-you",
                "md_instructions/richard-instructions",
            ],
        },
        {
            type: 'category',
            label: 'RPI',
            items: [
                'rpi/bluetooth_server',
                'rpi/data_transfer_utility',
                'rpi/rpi_database',
                'rpi/http_server',
                'rpi/ui',
            ],
        },
        {
            type: 'category',
            label: 'mobile',
            items: [
                'mobile_app/android',
                'mobile_app/ios'
            ],
        },
        {
            type: 'category',
            label: 'web',
            items: [
                'web/nginx',
                'web/swagger_server',
                'web/website',
                'web/mysql_database',
            ],
        }
    ],
};
