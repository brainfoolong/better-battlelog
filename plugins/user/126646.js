/**
* Battlelog Mods - A Plugin that give some love to battlelog mods :)
*
* @author BrainFooLong
* @version 1.1
* @url http://getbblog.com
*/

BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "battlelog-mods",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Battlelog Mods",

    /**
    * All text templates go in here
    *
    * @type Object
    */
    textTemplates : {
        "de" : {
            "clan-bf3" : {
                "title" : "Clansuche BF3",
                "text-self" : "Hierzu gibt es bereits ein Unterforum wo solches hingehört:\n\n[b]Rekruten gesucht![/b]\n(Mitspieler gefällig? Hier wirst du gesucht und gefunden!)\nhttp://battlelog.battlefield.com/bf3/de/forum/view/2832654624694388857/\n\n[b]Beachte folgenden Thread:[/b]\n[i]Richtlinien für den Bereich Rekruten gesucht![/i]\nhttp://battlelog.battlefield.com/bf3/de/forum/threadview/2832654490311044808/",
                "text-use" : "{clan-bf3}\n\n\n{closed}"
            },
            "clan-bf4" : {
                "title" : "Clansuche BF4",
                "text-self" : "Hierzu gibt es bereits ein Unterforum wo solches hingehört:\n\n[b]Communtiy[/b]\n(Das Forum rund um die Community, Rekruten suchen & finden und kreative Posts)\nhttp://battlelog.battlefield.com/bf4/de/forum/view/2955065218175153843/\n\n[b]Beachte folgenden Thread:[/b]\n[i]Richtlinien für Clansuche / Clanangebote[/i]\nhttp://battlelog.battlefield.com/bf4/de/forum/threadview/2955064768540810904/",
                "text-use" : "{clan-bf4}\n\n\n{closed}"
            },
            "clan-bfh" : {
                "title" : "Clansuche BF Hardline",
                "text-self" : "Hierzu gibt es bereits ein Unterforum wo solches hingehört:\n\n[b]Communtiy[/b]\n(Das Forum rund um die Community, Anwärter suchen & finden und kreative Posts)\nhttp://battlelog.battlefield.com/bfh/de/forum/view/2979150494141641719/\n\n[b]Beachte folgenden Thread:[/b]\n[i]Richtlinien für Clansuche / Clanangebote[/i]\nhttp://battlelog.battlefield.com/bfh/de/forum/threadview/2979150494141647704/",
                "text-use" : "{clan-bfh}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Name & Shame",
                "text-self" : "[b]Name & Shame[/b]\nDas Benennen oder Andeuten von Nutzern, von denen du glaubst, dass sie cheaten ist im Battlelog nicht erlaubt.\nEs ist weder produktiv, noch beschleunigt es die Sanktionen, die gegen solche Spieler erhoben werden.\nJegliche Andeutungen oder Bemerkungen dieser Art werden entfernt.\nMelde einen Spieler direkt über das Dreieck in seinem Battlelog Profil, damit wir das korrekt überprüfen können.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Suchfunktion",
                "text-self" : "[b]Nutze die Suchfunktion[/b]\nDoppelte oder mehrfach vorhandene Themen oder Posts werden entfernt, um die Effektivität der Foren zu erhalten. Wiederholtes Posting eines bereits vorhandenen Themas oder Posts kann zu einem temporären Bann führen.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Richtlinien für Beiträge",
                "text-self" : "[b]Richtlinien für Beiträge[/b]\nDer Sinn in den Foren ist es, eine produktive, hilfreiche und einladende Atmosphäre zu schaffen, in der Spieler diskutieren, Hilfe suchen und Rückmeldungen zu Battlefield posten können. Beiträge, die nicht diesen Richtlinien entsprechen, unterliegen dem Ermessen der Forenmoderatoren und können entfernt werden. Nutzer, die wiederholt gegen Regeln verstoßen oder durch ein negatives Verhalten auffallen, können durch Disziplinare Maßnahmen (Bann) bestraft werden.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Thread geschlossen",
                "text-self" : "[b]Thread geschlossen.[/b]",
                "text-use" : "{closed}"
            }
        },
        "en" : {
            "clan" : {
                "title" : "Recruitment",
                "text-self" : "Please be sure to post in the correct forums of your platform to recruite:\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955065226116511147/]Recruitment for PC[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2979150493868734973/]Recruitment for PS3 & PS4[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955064775252487694/]Recruitment for X360 & XONE[/url]\n\nAlso, don't forget to check the guide to the Platoons Forum for more informations:\nhttp://battlelog.battlefield.com/bf4/en/forum/threadview/2955064775253899297/",
                "text-use" : "{clan}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Name & Shame",
                "text-self" : "[b]Naming and Shaming[/b]\nNaming and shaming those who you believe to be cheating is not permitted on the forum or Battlelog posts. It is not productive and does not expedite action taken against these players. Any references of this type will be removed. Instead, Report players directly for investigation.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Search Engine",
                "text-self" : "[b]Use the search feature[/b]\nDuplicate content will be removed to promote the usefulness of this forum. Repeat reposting will result in a temporary ban.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Guidelines",
                "text-self" : "[b]Post Guidelines[/b]\nThe purpose of these forums is to create a productive and inviting space in which players can discuss, seek help, and give feedback on Battlefield. Posts that do not contribute to this end are subject to removal per the judgment of forum staff. Users that regularly violate rules or who are disruptive are subject to disciplinary action (bans) per the judgment of forum staff.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Thread locked",
                "text-self" : "[b]Thread locked.[/b]",
                "text-use" : "{closed}"
            }
        },
        "ru" : {
            "clan" : {
                "title" : "Recruitment",
                "text-self" : "[b]Для поиска игроков, оставьте сообщение в соответствующей подтеме своей платформы:[/b]\n* [url=http://battlelog.battlefield.com/bf4/ru/forum/view/2955065670164905051/]Поиск бойцов для отрядов (PC)[/url]\n* [url=http://battlelog.battlefield.com/bf4/ru/forum/view/2955064768600516384/]Поиск бойцов для отрядов (PS3 & Xbox 360)[/url]\n* [url=http://battlelog.battlefield.com/bf4/ru/forum/view/2955065219501226932/]Поиск бойцов для отрядов (PS4 & Xbox One)[/url]\n* Для подачи заявки на CW, ознакомьтесь с этой темой:\n[url=http://battlelog.battlefield.com/bf4/ru/forum/threadview/2955065222187843499/]Заявки на CW[/url]",
                "text-use" : "{clan}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Публичная огласка",
                "text-self" : "[b]Naming and Shaming (Публичная огласка).[/b]\nОбвинение тех, кого вы подозреваете в использовании запрещённых программ (читов) не допустимо. Это не продуктивно и не ускорит принятие мер в отношении этих игроков. Любые темы и сообщения такого типа будут удаляться. Вы можете отправить жалобу на игрока напрямую для проведения расследования.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Поиск по форуму",
                "text-self" : "[b]Поиск по форуму.[/b]\nПовторяющиеся темы будут удаляться. Повторное создание темы повлечёт за собой временную блокировку на форуме.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "О публикации сообщений",
                "text-self" : "[b]О публикации сообщений.[/b]\nЦелью этих форумов является создание продуктивного и дружественного пространства, в котором игроки могут вести обсуждение, искать помощь и оставлять отзывы об игре Battlefield. Сообщения, которые не отвечают этой концепции, будут удаляться. Пользователи, регулярно нарушающие правила или ведущие себя агрессивно, несут наказание (бан).",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Тема заблокирована",
                "text-self" : "[b]Тема заблокирована.[/b]",
                "text-use" : "{closed}"
            }
        },
        "es" : {
            "nameshame" : {
                "title" : "Naming and Shaming",
                "text-self" : "[b]Naming and Shaming[/b]\nName and Shame aquellos usuarios que crees que hacen trampa no está permitido en ningún mensaje de Battlelog. No es productivo y no acelera su sanción. Cualquier referencia a este tema será eliminada directamente. Si crees que un usuario hace trampas, repórtalo con el botón correspondiente del perfil. Por lo tanto, no esta permitido poner enlaces de jugadores, así como tampoco esta permitido poner enlaces de pelotones y servidores.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Utiliza el botón buscar",
                "text-self" : "[b]Guía para postear[/b]\nEl contenido duplicado será eliminado para que todos los mensajes tengan la misma visibilidad y facilidad de acceso. Repetir mensajes o hilos será motivo de baneo.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Guía para postear",
                "text-self" : "[b]Guía para postear[/b]\nEl propósito de estos foros es crear un espacio productivo y hospitalario donde los jugadores puedan buscar ayuda, discutir sobre temas del juego y comunicarnos vuestras impresiones con respecto a Battlefield. Las publicaciones que no contribuyan a este fin, están sujetas a quedar eliminadas o modificadas por el personal autorizado del foro. Los usuarios que violen regularmente las normas o sean conflictivos en alguna manera, serán sujeto de sanciones disciplinarias (baneo) por el personal autorizado del foro.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "El hilo está bloqueado",
                "text-self" : "[b]El hilo está bloqueado.[/b]",
                "text-use" : "{closed}"
            }
        },

        "fr" : {
            "nameshame" : {
                "title" : "Nommer et dénoncer",
                "text-self" : "[b]Nommer et dénoncer[/b]\nIl n'est pas permis de dénoncer et de nommer ouvertement un joueur que vous suspectez. Montrer du doigt les joueurs que vous suspectez de tricherie n'est pas autorisé sur le forum ou sur le Battlelog. Cela n'est pas productif et n'accélère pas les mesures prises contre ces joueurs. Les références de ce type seront supprimées ou modérées.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Utilisez la fonction de recherche",
                "text-self" : "[b]Utilisez la fonction de recherche[/b]\nLes contenus dupliqués seront supprimés pour améliorer la lisibilité du forum. Toute multiplication volontaire de messages sera sanctionnée d'un ban temporaire.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Règles pour poster un message",
                "text-self" : "[b]Règles pour poster un message[/b]\nLe but de ces forums est de créer un espace constructif et accueillant dans lequel les joueurs peuvent discuter, demander de l'aide, et proposer des idées d'améliorations sur Battlefield. Tout message ne contribuant pas à cette finalité fera l'objet d'une suppression de son contenu à l'appréciation de l'équipe de modération des forums.\nLes utilisateurs qui violent régulièrement les règles ou perturbent les échanges seront soumis à des mesures disciplinaires (bans) à l'appréciation de l'équipe de modération des forums.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Discussion fermée",
                "text-self" : "[b]Discussion fermée.[/b]",
                "text-use" : "{closed}"
            }
        },

        "pt" : {
            "clan" : {
                "title" : "Recrutamento",
                "text-self" : "Certique-se de postar na área da plataforma correta:\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955065226116511147/]Recrutamento para PC[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2979150493868734973/]Recrutamento para PS3 e PS4[/url]\n[url=http://battlelog.battlefield.com/bf4/en/forum/view/2955064775252487694/]Recrutamento para X360 & XONE[/url]\n\nTambém, não esqueça de verificar o guia de tropas para maiores informações:\nhttp://battlelog.battlefield.com/bf4/en/forum/threadview/2955064775253899297/",
                "text-use" : "{clan}\n\n\n{closed}"
            },
            "nameshame" : {
                "title" : "Mural da Vergonha",
                "text-self" : "[b]Mural da Vergonha[/b]\nNomear e envergonhar aqueles que você acredita que estão trapaceando não é permitido  no fórum. Isso não é produtivo e devemos tomar ações contra estes jogadores. Qualquer referência à este conteúdo será removidp. Aproveite e denunciem o jogador trapaceiro imediatamente.",
                "text-use" : "{guidelines}\n\n{nameshame}\n\n\n{closed}"
            },
            "search" : {
                "title" : "Motor de Busca",
                "text-self" : "[b]Use o recurso da busca[/b]\nConteúdo duplicado serão removidos para maior usabilidade do fórum. Repeat reposting will result in a temporary ban.",
                "text-use" : "{guidelines}\n\n{search}\n\n\n{closed}"
            },
            "guidelines" : {
                "title" : "Guias",
                "text-self" : "[b]Guia de Postagem[/b]\nO propósito deste fórum é criar um ambiente produtivo onde os jogadores possam dialogar, buscar ajuda, e dar algum feedback sobre Battlefield. Mensagens que diferem deste conteúdo produtivo serão julgadas e removidas pela equipe. Usuários que regurlamente descumprem o guia de postagem ou são caóticos serão expulsos (bans) por decisão da equipe.",
                "text-use" : "{guidelines}\n\n\n{closed}"
            },
            "closed" : {
                "title" : "Tópico Fechado",
                "text-self" : "[b]Tópico Fechado.[/b]",
                "text-use" : "{closed}"
            }
        }
    },

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
    },

    /**
    * Config flags, added to the BBLog Options Container
    * Config flags are served as integer, 1 or 0
    * Every flag must be a array with following keys,
    *   first key[0]: is the config flag name
    *   second key[1]: is the default value that is initially setted, when the plugin is loading the first time, 1 or 0
    *   third key[2]: (optional) must be a function, this turns the config entry into a
    *     button and the handler will be executed when the user click on it (like plugins, themes, radar, etc..)
    */
    configFlags : [],

    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    init : function(instance){
        $("head").append('<style type="text/css">#popup-bmods .entry{cursor:pointer; padding:3px;} #popup-bmods .entry:hover{text-decoration:underline}</style>')
    },

    /**
    * A trigger that fires everytime when the dom is changing but at max only once each 200ms (5x per second) to prevent too much calls in a short time
    * Example Case: If 10 DOM changes happen in a period of 100ms than this function will only been called 200ms after the last of this 10 DOM changes
    * This make sure that all actions in battlelog been finished before this function been called
    * This is how BBLog track Battlelog for any change, like url, content or anything
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    domchange : function(instance){
        // post templates
        var t = $("textarea.common-replyform-form-body, textarea#forum-newthread-body");
        if(!$("#bmods-btns").length){
            t.before('<div class="base-clear"></div><div style="margin-top:5px; margin-bottom:2px; text-align:right;" id="bmods-btns"></div><div class="base-clear"></div>');
            $("#bmods-btns").append($('<input class="btn btn-small" value="Text Templates" type="button">').on("click", function(){
                var html = $('<div>');
                html.append('<div style="font-size:10px; text-align:right;">Plugin powered by <a href="http://getbblog.com" target="_blank">getbblog.com</a></div><br/>');
                if(typeof instance.textTemplates[BBLog.cache("language")] != "undefiend"){
                    var texts = instance.textTemplates[BBLog.cache("language")];
                    for(var id in texts){
                        html.append($('<div class="entry">'+texts[id].title+'</div>').data("data", texts[id]).on("click", function(){
                            t.trigger("focus");
                            var data = $(this).data("data");
                            var v = $.trim(t.val());
                            if(v.length) v += "\n\n\n";
                            var text = data["text-use"];
                            for(var subId in texts){
                                text = text.replace(new RegExp("{"+subId+"}", "ig"), texts[subId]["text-self"]);
                            }
                            v += text;
                            t.val(v);
                            BBLog.closeAllPopups();
                            $("input[name='officialPost'], input[name='publish']").prop("checked", true);
                        }));
                    }
                }
                BBLog.popup('bmods', 'Text Templates', html);
            }));
        }
        // new links to user profile dropdown
        var e = $("section#user .profile-info .common-reportbutton-dropdown ul, #profile-header .username ul");
        if(e.length && !$("#bmods-userposts-link").length){
            var id = $("#user").attr("data-user-id");
            if(!id) id = $("#profile-secondary-column a.avatar").attr("rel");
            e.append('<li><a id="bmods-userposts-link" class="base-no-ajax" target="_blank" href="/'+BBLog.cache("mode")+'/'+BBLog.cache("battlelog.language")+'forum/userPosts/'+id+'/">User Posts</a></li>');
        }
    }
});