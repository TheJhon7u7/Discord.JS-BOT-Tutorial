const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

        const query = args.slice().join(' ')
        if(!query) return message.reply('Ingresa la Busqueda.');
        const url = 'https://djsdocs.sorta.moe/v2/embed?src=stable&q=' + query;

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.reply('An Error Occured, Try Again Later.')    
        }

        const pkg = response
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/emojis/586438523796848640.png?v=1')
        .setAuthor(pkg.author.name, pkg.author.icon_url)
        .setDescription(pkg.description)
        .setTimestamp()
        if(pkg.fields) {embed.addFields(pkg.fields)}
        if(pkg.title) {embed.setTitle(pkg.title)}
        message.channel.send(embed)
