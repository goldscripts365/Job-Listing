local menu = true

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(10)
        if menu then
            local coords = GetEntityCoords(PlayerPedId())

            for i = 1, #Config.Zones, 1 do
                local distance = #(coords - Config.Zones[i])
                
                if distance < Config.DrawDistance then
                    DrawMarker(Config.MarkerType, Config.Zones[i], 0.0, 0.0, 0.0, 0, 0.0, 0.0, Config.ZoneSize.x, Config.ZoneSize.y, Config.ZoneSize.z,Config.MarkerColor.r, Config.MarkerColor.g, Config.MarkerColor.b, 100, false, true, 2, false, false, false, false)
                end

                if distance < (Config.ZoneSize.x / 2) then
                    ESX.ShowHelpNotification('Press ~r~E to open ~b~Job Center', thisFrame, beep, duration)
                    if IsControlJustReleased(0, 38) then
                        SetDisplay(true, true)
                        menu = false
                    end
                end
            end
        end
    end
end)

RegisterNUICallback("fisherman-btn", function(data)
    SetNuiFocus(false, false)
    local job = "fisherman"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("fueler-btn", function(data)
    SetNuiFocus(false, false)
    local job = "fueler"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("lumberjack-btn", function(data)
    SetNuiFocus(false, false)
    local job = "lumberjack"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("miner-btn", function(data)
    SetNuiFocus(false, false)
    local job = "miner"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("reporter-btn", function(data)
    SetNuiFocus(false, false)
    local job = "reporter"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("slaughterer-btn", function(data)
    SetNuiFocus(false, false)
    local job = "slaughterer"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("tailor-btn", function(data)
    SetNuiFocus(false, false)
    local job = "tailor"
    TriggerServerEvent('gld_joblisting:setjob', job)
    menu = true
end)

RegisterNUICallback("close", function(data)
    SetNuiFocus(false, false)
    menu = true
end)

function SetDisplay(bool)
    SendNUIMessage({
        type = "show",
        status = bool,
    })

	SetNuiFocus(bool, bool)
end

if Config.Blip.Enabled then
    CreateThread(function()
      for i = 1, #Config.Zones, 1 do
        local blip = AddBlipForCoord(Config.Zones[i])
  
        SetBlipSprite(blip, Config.Blip.Sprite)
        SetBlipDisplay(blip, Config.Blip.Display)
        SetBlipScale(blip, Config.Blip.Scale)
        SetBlipColour(blip, Config.Blip.Colour)
        SetBlipAsShortRange(blip, Config.Blip.ShortRange)
  
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentSubstringPlayerName('Job Center')
        EndTextCommandSetBlipName(blip)
      end
    end)
  end
