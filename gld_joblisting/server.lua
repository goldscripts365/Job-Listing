RegisterServerEvent('gld_joblisting:setjob', function(job)
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer then
        xPlayer.setJob(job, 0)
    end
end)