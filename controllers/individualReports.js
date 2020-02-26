/** 
    Este es el controller que agarra el id de la session que identifica al usuario 
    pero primero debemos asegurarnos que los reportes que sean credos esten amarrados en la DB con ese id. 
    necesitamos que ese ID se guarde en la base de datos para luego poder decirle a este controller que
    accede a los particulares ID de el usuario que acaba de hacer login. 

    #1 hacer que cada reporte se guarde tambien con el ID generado por el usuario (el id cambia cada vez q el usuario hace sig in?)

    #2 Si el Id cambia cada vez que usuario hace signin talvez tenemos que unir el id_user y el Id_reporte

    #3 Creo que Populate busca esos id generados y los asocia con el usuario que los genero.  Keep in mind that this is your stored document. We have not called .populate() on it yet. Once it is called, it will go to the appropriate collection, search for those two _ids, and return your user, but now with an array of her actual posts. Let’s do that now.
*/

