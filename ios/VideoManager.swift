//
//  VideoManager.swift
//  TestTheBridge
//
//  Created by Lucas Saldanha on 04/07/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(VideoManager)
class VideoManager: RCTEventEmitter {
  
  private var message = ""
  
  @objc
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["message": message]
  }
  
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func addHi() {
    self.message += "Hi "
    sendEvent(withName: "onAddHi", body: ["message": self.message])
  }
  
  override func supportedEvents() -> [String]! {
    return ["onAddHi"]
  }
  
  
}
